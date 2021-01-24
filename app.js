'use strict';

// configure express
const express = require('express');
var handlebars  = require('express-handlebars');
const app = express();
var path = require('path')

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// router
app.use('/', require('./router'));

// static files
app.use('/static', express.static('public'))
// Uploads directory for hamster images
app.use('/uploads', express.static('uploads'))

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});