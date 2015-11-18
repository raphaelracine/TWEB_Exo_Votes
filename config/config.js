var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: process.env.port,
  },

  test: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: process.env.port,
  },

  production: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: process.env.port,
  }
};

module.exports = config[env];
