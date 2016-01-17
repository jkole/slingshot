var express = require('express');
var path = require('path');
var server = express();

var port = process.env.PORT || 8080;
var distDir = path.join(__dirname, '../dist');

server.use(express.static(distDir));

server.get('/*', function(req, res) {
    res.sendFile(distDir);
});

server.listen(port, function() {
  console.log('server listening on port ' + port);
});
