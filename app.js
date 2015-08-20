var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


app.get('/', routes.index);


var server = app.listen(app.get('port'), function(){
   console.log('Servidor rodando de boas' + server.address().port);
});