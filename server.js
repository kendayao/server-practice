var express = require("express")
var app=express();
var PORT = 3000;


// Data

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePonts: 2000
};

var dartmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePonts: 1200
};

var obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi",
  age: 150,
  forcePonts: 1500
};




app.listen(PORT, function(){
  console.log("App listening on PORT "+ PORT)
})
