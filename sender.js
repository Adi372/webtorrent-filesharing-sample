const client = new WebTorrent();

document.querySelector("#file-input").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) {
        console.error("No file selected.");
        return;
    }

    console.log("Seeding file:", file.name);
    
    client.seed(file, (torrent) => {
        console.log("Seeding started...");
        console.log("Magnet Link:", torrent.magnetURI);

        // Display magnet link for sharing
        document.querySelector("#magnet-link").innerHTML = `
            <b>Share this Magnet Link:</b> 
            <input type="text" value="${torrent.magnetURI}" readonly>
        `;
    });

    client.on("error", (err) => {
        console.error("WebTorrent error:", err);
    });
});
