/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// Authenticator
app.use((req, res, next) => {
  let auth;

  // check whether an autorization header was send
  if (req.headers.authorization) {
    // only accepting basic auth, so:
    // * cut the starting "Basic " from the header
    // * decode the base64 encoded username:password
    // * split the string at the colon
    // -> should result in an array
    auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
  }

  // checks if:
  // * auth array exists
  // * first value matches the expected user
  // * second value the expected password
  if (!auth || auth[0] !== 'swatchgroup' || auth[1] !== 'preview') {
    // any of the tests failed
    // send an Basic Auth request (HTTP Code: 401 Unauthorized)
    res.statusCode = 401; // eslint-disable-line no-param-reassign
    // MyRealmName can be changed to anything, will be prompted to the user
    res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
    // this will displayed in the browser when authorization is cancelled
    res.end('Unauthorized');
  } else {
    // continue with processing, user was authenticated
    next();
  }
});

app.use(express.static('public'));

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
