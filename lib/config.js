/**
 * Dependencies
 */

var fs = require('fs');

module.exports = function config(key, value, path) {
  path = path || '.dpd';
  
  var config = {};
  if((fs.existsSync || fs.existsSync)(path)) {
    try {
      config = JSON.parse(fs.readFileSync(path))
    } catch (e) {
      return cancel('error when parsing config');
    }
  }
  
  if(key) {
    if(value) {
      config[key] = value;
      fs.writeFileSync(path, JSON.stringify(config));
    } else {
      return config[key];
    }
  }
}