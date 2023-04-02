var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);


function handleRequest(req, res){
    fs.readFile(__dirname+"/index.html", function(err, data){
        if (err) throw err;

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data)
    })
}





// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});



