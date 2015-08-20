var express = require('express');
var path = require('path');
var routes = require('./routes');

// instancia do express
var app = express();

// Seto o caminho padrão das minhas views
app.set('views', path.join(__dirname, 'views'));

// template engine que é geralmente usada pelo express, caso queiramos
app.set('view engine', 'ejs');

// porta onde o servidor node estará ouvindo a app
app.set('port', process.env.PORT || 3000);

// Torno possível a leitura da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', routes.index);
app.get('/list', routes.list);

// Bootstraping da app
var server = app.listen(app.get('port'), function(){
   console.log('Servidor rodando de boas' + server.address().port);
});