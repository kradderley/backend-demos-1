const express = require("express");
const app = express();
const simpsons = require("./simpsons.json");
const logging = require("./middleware/logging");
const auth = require("./middleware/auth");

// goes from express.static -> middleware -> app.get

// handles static file middleware
app.use(express.static("public"));

// convert the body to json
app.use(express.json()); 

// middleware (always a function) but you must call next in order for the middleware to allow you pass to the route
// middleware is often used for checks and validations to ensure everything is good before the code is run

// logging middleware
app.use(logging);

// api key validation middleware
app.use(auth);

// route = takes 2 things: the url that want to respond to and a callback that runs once the request is detected
// in the callback, you send 2 parameters: request (req) and response (rep)

// route middleware
app.use("/", require("./routes/quotes"));


// should include the port number and a callback but you should insert the port dynamically
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("The server is running!");
});
