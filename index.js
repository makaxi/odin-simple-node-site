var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var filename;
  var nameOnly = path.parse(q.pathname).name;

  if(nameOnly == "") filename = './index.html';
  else if(nameOnly === "about") filename = './about.html';
  else if(nameOnly === "contact-me") filename = './contact-me.html';
  else filename = './404.html';
  
  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type' : 'text/html'});
      return res.end('404 NOT FOUND');
    }
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);