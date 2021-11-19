//
// This is where the app starts :)
//

var express = require("express");
var bodyParser = require("body-parser");
var app = express();


// CORS middleware function
var allowCrossDomain = function (req, res, next) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  for (var key in headers) {
    res.set(key, headers[key]);
  }
  next();
}

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//
// remove X-Powered-By header, add new one ;)
//

app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  res.set('X-Powered-By', 'LukiQ');
  next();
});

app.use(allowCrossDomain);
 
var routes = require("./routes.js")(app);
 
var server = app.listen(3000, function () {
  console.log("Listening on port %s", server.address().port);
});