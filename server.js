const http = require('http');
const fs = require('fs');
const url = require('url');

//const pt = {
	//key:fs.readfileSync('key.pem'),
	//cert:fs.readfilesync('cert.pem')
//};

const port = 8000;
const server = http.createServer(function(req, res){
	
	const urlObject =url.parse(req.url, true);
	const fileName = "." + urlObject.pathname;
	
	fs.readFile(fileName, function(err, data) {
		
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(port, '0.0.0.0')
	console.log('server is running...');

