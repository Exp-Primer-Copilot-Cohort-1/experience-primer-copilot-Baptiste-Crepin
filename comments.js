// Create web server
// Path: server.js
// Create a new file called server.js and add the following code to it:
// Path: server.js
// Create a new file called server.js and add the following code to it:

var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = require('./comments');

http.createServer(function (req, res) {
  var url_parts = url.parse(req.url);

  if(url_parts.pathname == '/') {
    fs.readFile('./index.html', function(err, data) {
      res.end(data);
    });
  }
  else if(url_parts.pathname == '/comments') {
    if(req.method == 'POST') {
      var body = '';

      req.on('data', function (data) {
        body += data;
      });

      req.on('end', function () {
        comments.addComment(JSON.parse(body).comment);
        res.end();
      });
    }
    else if(req.method == 'GET') {
      res.end(JSON.stringify(comments.getComments()));
    }
  }
}).listen(8080, '