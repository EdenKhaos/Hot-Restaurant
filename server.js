var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [];
// Routes
// =============================================================

// gets home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  // gets reserve page
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
// gets view page
app.get("/viewtables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
  });
  
  // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  