// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:firstNum/:secondNum", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  var operation = req.param.operation
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  var firstNum = parseInt(req.params.firstNum);
  var secoudNum = parseInt(req.params.secoudNum);
  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  case "+":
  case "add":
    results = firstNum + secoundNum; 
    break;
  case "-":
  case "subtract":
    results = firstNum - secoudNum; 
    break;
  case "*":
  case "multiply":
   results = firstNum * secoundNum;
    break;
  case"/":
  case "divide":
   results = firstNum / secoundNum;
    break;
  default:
    // Handle anything that isn't specified
    result = firstNum / secoundNum;
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
