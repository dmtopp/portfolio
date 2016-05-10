var express = require('express'),
    app     = express();

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html');
})

app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('The server is listening on port ' + server.address().port);
})
