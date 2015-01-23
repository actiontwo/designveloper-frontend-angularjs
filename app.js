var express = require('express');
var app = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var router         = express.Router();
//CORS middleware
//var allowCrossDomain = function(req, res, next) {
//  res.header('Access-Control-Allow-Origin', 'designveloper.com');
//  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//  res.header('Access-Control-Allow-Headers', 'Content-Type');
//
//  next();
//};
app.use('/public/js', express.static(__dirname + '/public/js'));
app.use('/templates', express.static(__dirname + '/public/templates'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
//app.use('/partials', express.static(__dirname + '/partials'));
//app.use(function (req, res, next) {
//  // You could also wrap this in the `if (req.method === 'OPTIONS')` as in the cors-options-node.js example
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//  res.setHeader('Access-Control-Allow-Credentials', true);
//  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
//  next();
//});
//router.use(function(req, res, next) {
//  res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
//  res.header('Access-Control-Allow-Headers', 'X-Auth-Key');
//  next();
//});
app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendfile('index.html', { root: __dirname+'/public' });
});

app.listen(1338); //the port you want to use