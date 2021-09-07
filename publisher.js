'use strict'

const express = require('express');
const debugLib  = require('debug');
const http = require('http');
const helmet = require("helmet");

const topicRouter = require('./routes/topic');
const subscriptionRouter = require('./routes/subscription');
const publishRouter = require('./routes/publish');

const app = express();
app.use(express.json());
app.use(helmet());


/**
 * Module dependencies.
 */

var debug = debugLib('Modern PX:server');

/**
* Get port from environment and store in Express.
*/

var port = normalizePort(process.env.PUBLISHER_PORT || '8000');
app.set('port', port);

/**
* Create HTTP server.
*/


var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



app.use("/topic",topicRouter);
app.use("/subscribe",subscriptionRouter);
app.use("/publish",publishRouter);

/**
* Normalize a port into a number, string, or false.
*/

function normalizePort(val) {
 var port = parseInt(val, 10);

 if (isNaN(port)) {
   // named pipe
   return val;
 }

 if (port >= 0) {
   // port number
   return port;
 }

 return false;
}

/**
* Event listener for HTTP server "error" event.
*/

function onError(error) {
 if (error.syscall !== 'listen') {
   throw error;
 }

 var bind = typeof port === 'string'
   ? 'Pipe ' + port
   : 'Port ' + port;

 // handle specific listen errors with friendly messages
 switch (error.code) {
   case 'EACCES':
     console.error(bind + ' requires elevated privileges');
     process.exit(1);
     break;
   case 'EADDRINUSE':
     console.error(bind + ' is already in use');
     process.exit(1);
     break;
   default:
     throw error;
 }
}

/**
* Event listener for HTTP server "listening" event.
*/

function onListening() {
 var addr = server.address();
 var bind = typeof addr === 'string'
   ? 'pipe ' + addr
   : 'port ' + addr.port;
 debug('Listening on ' + bind);
}

module.exports = app;