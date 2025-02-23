FILE STRUCTURE:

p2p-file-sharing/
│── public/                # Run live-server inside this folder!
│   │── index.html         # Sender UI (must exist)
│   │── receiver.html      # Receiver UI (must exist)
│   │── sender.js          # Sender logic
│   │── receiver.js        # Receiver logic
│   │── style.css          # CSS styles

Run the following command in terminal:
npx live-server public/

if u get an error message like: 
live-server : The term 'live-server' is not recognized as the 
name of a cmdlet, function, script file, or operable program. 
Check the spelling of the name, or if a path was included, 
verify that the path is correct and try again.
At line:1 char:1
+ live-server public/
+ ~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (live-server:Str 
   ing) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException


Then run the command: npm install -g live-server

and then go to public folder: cd public
then run the live server command: live-server

it will open the sender's page in browser on the url : http://127.0.0.1:8080/
in another tab open receiver's page: http://127.0.0.1:8080/receiver.html
