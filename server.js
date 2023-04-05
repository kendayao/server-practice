var express = require("express")
var app=express();
var PORT = 3000;


// Data

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePonts: 2000
}






app.listen(PORT, function(){
  console.log("App listening on PORT "+ PORT)
})
