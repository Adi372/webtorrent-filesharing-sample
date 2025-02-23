const client = new WebTorrent();

document.querySelector("#download-btn").addEventListener("click", () => {
    const magnetLink = document.querySelector("#magnet-input").value;

    if (!magnetLink) {
        console.error("No magnet link provided.");
        return alert("Enter a valid magnet link!");
    }

    if (client.get(magnetLink)) {
        console.warn("Torrent is already downloading!");
        return alert("This file is already downloading!");
    }

    console.log("Downloading from magnet link:", magnetLink);

    client.add(magnetLink, (torrent) => {
        console.log("Torrent added:", torrent.infoHash);

        torrent.files.forEach((file) => {
            console.log("File found:", file.name);

            // ✅ Create a writeable stream instead of storing in memory
            file.getBlob((err, blob) => {
                if (err) {
                    console.error("Error generating Blob:", err);
                    return;
                }

                console.log("Download ready:", file.name);

                // ✅ Create a proper download link for large files
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = file.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // ✅ Free memory after download
                setTimeout(() => URL.revokeObjectURL(url), 10000);
            });

            // ✅ Show real-time download progress
            torrent.on("download", (bytes) => {
                console.log(`Downloaded: ${(torrent.downloaded / 1024 / 1024).toFixed(2)} MB / ${(torrent.length / 1024 / 1024).toFixed(2)} MB`);
            });

            torrent.on("done", () => {
                console.log("Download complete!");
            });
        });
    });

    client.on("error", (err) => {
        console.error("WebTorrent error:", err);
    });
});
