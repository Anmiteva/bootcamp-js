let mongoose = require('mongoose');

//MongoDb Connection

// (node:17972) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)

const express = require('express');
const app = express();
const port = 5000;

mongoose.set('strictQuery', false);
mongoose
	.connect('mongodb://localhost/elexir-db')
	.then(() => console.log('successfuly connected to Elexir database'))
	.catch((err) => console.log(err));

// module.exports = app;

// changing port for backend

app.get('/', (req, res) => {
	res.send('Elexir database!');
});

app.get('/newEndpoint', (req, res) => {
	res.send('New Elexir database!!!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app;
