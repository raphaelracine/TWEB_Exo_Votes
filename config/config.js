var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 3000;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: port,
  },

  test: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: port,
  },

  production: {
    root: rootPath,
    app: {
      name: 'chapitre6-votes'
    },
    port: port,
  }
};

module.exports = config[env];
