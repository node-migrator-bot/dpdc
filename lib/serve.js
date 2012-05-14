/**
 * Dependencies
 */

var filed = require('filed')
  , http = require('http')
  , request = require('request')
  , config = require('./config')
  , remote = config('clone')
  , path = require('path')
  , fs = require('fs')
;

module.exports = function (fpath, port, fn) {
  if(remote) {
    http
      .createServer(function (req, res) {
        if(req.url === '/') req.url = '/index.html';
        if((fs.existsSync || path.existsSync)(fpath + req.url)) { 
          req.pipe(filed(fpath + req.url)).pipe(res);
        } else if(req.url === '/dpd.js' || req.url.split('?')[0].indexOf('.') === -1) {
          req.pipe(request(sanitizeHost(remote) + req.url)).pipe(res);
        } else {
          res.statusCode = 404;
          res.end();
        }
      })
      .listen(port || process.env.port || 3000, fn)
    ;
  } else {
    console.log('error: not a cloned or initialized a deployd directory');
  }
}

function sanitizeHost(host) {
  if(~host.indexOf('://')) {
    return host;
  } else {
    return 'http://' + host;
  }
}