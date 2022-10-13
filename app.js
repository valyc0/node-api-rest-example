var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app);
    var fs = require("fs");
    //mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send('hello world!');
});

app.get('/aa', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }));
});


app.get('/test/:id', function (req, res) {
  // First read existing users.
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     var users = JSON.parse( data );
     var user = users["user" + req.params.id] 
     console.log( user );
     res.end( JSON.stringify(user));
  });
})

app.get('/test1/:id', function (req, res) {
  var ret="";
  if (req.params.id==1){
    ret="ciao1";
  }
  else{
    ret ="ciao2"
  }
     res.end( ret);

})

//routes = require('./routes/tvshows')(app);

/*
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});
*/

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});