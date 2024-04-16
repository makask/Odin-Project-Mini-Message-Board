Project: Mini Message Board
Odin Project NodeJS Course

Mini message board implemented with a node Express server.

Assignment: 
- Use express-generator to set up a basic project using whichever templating language you prefer or set it up manually.
- Use some of the more popular templating languages: PUG, EJS, Handlebars.
- We are going to have 2 routes, the index ("/") and a new-message form ("/new").
- Create an array at the top of your index router called messages and put a couple of sample messages inside of it.
- Loop through the messages array using whichever templating language you selected and for each one, display the user, text and the date the message was added.
- In the router add a router.get() for the "/new" route and point it to a template named "form".
- When you click on the submit button it should send a POST request to the url specified by the action attribute.
- In order to get and use the data from your form, you will need to access the contents of your form inside router.post().
- In your router.post() take the contents of the form submission and push them into the messages array as an object.
- At the end of the router.post() function use res.redirect('/') to send users back to the index page after submitting a new message.
- You should be able to visit /new, fill out the form, submit it and then see it show up on the index page. 

How to run:
  - download project
  - open terminal
  - navigate to project directory
  - in terminal type npm install
  - in terminal type node app.js or nodemon app.js

Index page:
![image](https://github.com/makask/Odin-Project-Mini-Message-Board/assets/16080688/f1b4bf37-7748-4988-a151-cc252317a305)
Create new message page:
![image](https://github.com/makask/Odin-Project-Mini-Message-Board/assets/16080688/950679c2-1a87-4752-9fd8-706f4f753e69)

