var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var worldviewRouter = require('./routes/worldview');
var satelliteRouter = require('./routes/satellite');
var pubarticRouter = require('./routes/pubartic');
var renderedmapsRouter = require('./routes/renderedmaps');
var landmarkRouter = require('./routes/landmark');
var mainRouter = require('./routes/main');
var pubarticoneRouter = require('./routes/pubarticone');
var pubartictwoRouter = require('./routes/pubartictwo');
var pubarticthreeRouter = require('./routes/pubarticthree');
var pubarticfourRouter = require('./routes/pubarticfour');
var pubarticfiveRouter = require('./routes/pubarticfive');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', worldviewRouter);
app.use('/', satelliteRouter);
app.use('/', pubarticRouter);
app.use('/', renderedmapsRouter);
app.use('/', landmarkRouter);
app.use('/', mainRouter);
app.use('/', pubarticoneRouter);
app.use('/', pubartictwoRouter);
app.use('/', pubarticthreeRouter);
app.use('/', pubarticfourRouter);
app.use('/', pubarticfiveRouter);

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