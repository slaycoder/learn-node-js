// import all needed package
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const http = require('node:http')

// init express server and router
// buat konstanta app menggunakan express
const app = express();
// mengimpor router
const mainRouter = require('./router');

// app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// http router
// main router akan dimasukkan ke dalam express app
app.use('/', mainRouter);

// static router
app.use('/static', express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(3000, '127.0.0.1', function () {
    console.log('Listening on 127.0.0.1:3000');
});