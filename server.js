var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);


function handleRequest(req,res){

    var path = req.url;

    switch (path){
        case "/food":
            return fs.readFile(__dirname + "/food.html", function(err,data){
                if (err) throw err;
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data)
                console.log(data)
            });

        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function(err,data){
                if (err) throw err;
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data)
                console.log(data)
            })

        default:
            return fs.readFile(__dirname + "/index.html", function(err,data){
                if (err) throw err;
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data)
                console.log(data)
            })




    }


}




// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});



