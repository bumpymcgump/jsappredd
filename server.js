var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
});

server.listen(process.env.PORT || 5000);