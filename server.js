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
  role: "Jedi Knight",
  age: 150,
  forcePonts: 1500
};




// Routes
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// app.get("/yoda", function(req, res){
//   res.json(yoda)
// });

// app.get("/darthmaul", function(req, res){
//   res.json(dartmaul)
// });

// app.get("/obiwankenobi", function(req, res){
//   res.json(obiwankenobi)

// })

app.get("/:character", function(req, res){
  var chosen = req.params.character;
  console.log(chosen);
  res.end();

})



app.listen(PORT, function(){
  console.log("App listening on PORT "+ PORT)
})
