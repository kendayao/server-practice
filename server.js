var http = require("http")

var PORTONE = 3000;
var PORTTWO = 8080;



function handleRequestOne(req, res){
    res.end("To err is human, but to ..")
}

function handleRequestTwo(req,res){
    res.end('Never trust a computer you cant throw out the window')
}


var serverOne = http.createServer(handleRequestOne)
var serverTwo = http.createServer(handleRequestTwo)

serverOne.listen(PORTONE, function(){
    console.log("Sever listening  on: http://localhost:"+PORTONE)
})

serverTwo.listen(PORTTWO, function(){
    console.log("Sever listening  on: http://localhost:"+PORTTWO)
})