FILE STRUCTURE:

"p2p-file-sharing" folder -> "public" folder -> index.html, receiver.html, sender.js, receiver.js, style.css

Run the following command in terminal:
npx live-server public/

if u get an error message like: 
live-server : The term 'live-server' is not recognized as the 
name of a cmdlet, function, script file, or operable program. 
Check the spelling of the name, or if a path was included, 
verify that the path is correct and try again.
At line:1 char:1


Then run the command: npm install -g live-server

and then go to public folder: cd public
then run the live server command: live-server

it will open the sender's page in browser on the url : http://127.0.0.1:8080/
in another tab open receiver's page: http://127.0.0.1:8080/receiver.html
