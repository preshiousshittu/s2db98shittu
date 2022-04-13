var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var usersRouter = require('./routes/users');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Book = require("./models/book"); 
var resourceRouter = require('./routes/resource');


const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true}); 



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/users', usersRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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

async function recreateDB(){ 
  // Delete everything 
  await Book.deleteMany(); 
 
  let instance1 = new 
Book({name:"stoory",  length:200, 
author:"made_by"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 

  let instance2 = new 
  Book({name:"stoory2",  length:200, 
  author:"made_by2"}); 
    instance2.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("second object saved") 
    }); 
    let instance3 = new 
Book({name:"stoory3",  length:200, 
author:"made_by3"}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("third object saved") 
  }); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

module.exports = app;
