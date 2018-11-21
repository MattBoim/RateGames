var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var ObjectId = require('mongodb').ObjectID;

app.use(session({
    secret: 'keyboardkitteh',
}));


mongoose.Promise = global.Promise;

const flash = require('express-flash');
app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');
// app.use(express.static(path.join(__dirname, './static')));
app.use(express.static( __dirname + '/angulerProj/public/dist/public' ));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/routes')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})