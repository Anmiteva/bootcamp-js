let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let menuRouter = require('./routes/menu');

let mongoose = require('mongoose');

//MongoDB Connection

let app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/elexir-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', function () {
	console.log('MongoDB database connection successfully');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// // error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.get('/', (req, res) => {
	res.send('Elexir database!');
});

// mongoose.set('strictQuery', false);
// mongoose
// 	.connect('mongodb://localhost/elexir-db')
// 	.then(() => console.log('successfuly connected to Elexir database'))
// 	.catch((err) => console.log(err));

module.exports = app;
