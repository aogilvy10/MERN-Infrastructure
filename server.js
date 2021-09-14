const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();
// returns an express app

//app.use we are mounting middleware

app.use(logger('dev'));
app.use(express.json());
//must be configured to serve from the build folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object to req.user
// be sure to mount before routes
app.use(require('./config/checkToken'));

// get the server ti listen

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app is running on port ${port}`)
});

// catch all route
// catch any get requests that doesnt match one of our api routes
// put API routes here, before the "catch all route"
app.use('/api/users', require('./routes/api/users'))

//The following "catch all" route (note the *) is nessecary to rerturn the index.html on all non-AJAX requests
// /* matches anything
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})