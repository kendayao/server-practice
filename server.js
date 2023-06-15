var express = require("express")
var app=express();
var path = require("path")
var PORT = 3000;

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePonts: 2000
},{
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePonts: 1200
},{
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 150,
  forcePonts: 1500
}];

  

// Routes
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"))
});

// app.get("/yoda", function(req, res){
//   var yoda = characters[0]
//   res.json(yoda)
// });

// app.get("/darthmaul", function(req, res){
//   var darthmaul = characters[1]
//   res.json(darthmaul)
// });

// app.get("/obiwankenobi", function(req, res){
//   var obiwankenobi = characters[2]
//   res.json(obiwankenobi)

// })

app.get("/:character", function(req, res){
  var chosen = req.params.character;
  console.log(chosen);
  res.end();

})

// get data for every character
app.get("/api/characters", function(req,res){
  return res.json(characters)
})

// get data for specific character
app.get("/api/characters/:character", function(req,res){
  var chosen = req.params.character;
  console.log(chosen);
  
  for(var i = 0; i<characters.length; i++){
    if(chosen === characters[i].routeName){
      return res.json(characters[i])
    }
  }

  return res.send("No character found")



})

app.post("/api/characters", function(req,res){
  var newCharacter = req.body;
  console.log(newCharacter);
  characters.push(newCharacter);
  res.json(newCharacter);
});



app.listen(PORT, function(){
  console.log("App listening on PORT "+ PORT)
})
