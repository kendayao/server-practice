var http = require("http")

var PORT = 8080;

function handleRequest(req, res){
    res.end("server is working on server " + req.url)
}


var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server is listening on http://localhost:"+PORT)
})