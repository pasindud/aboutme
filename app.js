// ==========================================
// About me
// ==========================================
// Author   : Pasindu De Silva
// License  : MIT (c) Pasindu De Silva
// Github   : http://github.com/pasindud
// ==========================================

var express = require('express'),
    app = module.exports = express.createServer();

var routes = require('./routes')

var appid=1000,appw=5000;

// all environments

app.configure(function() {
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(app.router);
  return app.use(express["static"](__dirname + "/public"));
});

app.configure("development", function() {
  return app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.get('/', function(req,res){
	res.redirect('/pasindu');
});
app.get('/:user', routes.index);




var port = process.env.PORT || 8080;

app.listen(port);
console.log("Express server listening on port %d in mode", app.address().port);