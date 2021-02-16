const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const debug = require('debug')('space:server');
const http = require('http');

const apiRouter = require('./src/routes/api');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** ********************************************************************
 *
 * Routes. All Routes should go before the error handler
 *
 ********************************************************************* */
app.use('/', apiRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the awsome REST API Microservice');
});

/** ********************************************************************
 *
 * Error handler
 *
 ********************************************************************* */

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(errorHandler);

/** ********************************************************************
 *
 * Server Start up
 *
 ********************************************************************* */

// Get port from the environment
const port = normalizePort(process.env.PORT || '3000');

// Create HTTP server
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/** ********************************************************************
 *
 * Helper functions
 *
 ********************************************************************* */

/**
 * Error handler
 */
function errorHandler(err, req, res, next) {
  // send the error
  res.status(err.status || 500).send(err);
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const ret_port = parseInt(val, 10);

  if (Number.isNaN(ret_port)) {
    // named pipe
    return val;
  }

  if (ret_port >= 0) {
    // port number
    return ret_port;
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

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
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
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
