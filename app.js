var createError = require('http-errors');
var favicon= require('path');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser =require('body-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose =require('mongoose');
var session = require('express-session');
var passport=require('passport');
var flash =require('connect-flash');
var indexRouter = require('./routes/index.js');
var validator=require('express-validator');
//var usersRouter = require('./routes/users');

var app = express();


//had to use the below connection function for mongoose. it is diff from the video (to avoid error).
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true ,useUnifiedTopology: true});
require('./config/passport');
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({extname:'.hbs',defaultLayout : 'layout',layoutsDir: path.join(__dirname,'views/layouts'),
partialDir: [ path.join(__dirname,'views/partials')]}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());

app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());//can google passport strategies for more info.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
