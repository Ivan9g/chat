var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

http.createServer(app).listen(config.get('port'), () => {
  console.log("Express server listen on port: " + config.get('port'));
});

module.exports = app;
