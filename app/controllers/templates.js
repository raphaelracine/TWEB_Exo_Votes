var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/template', router);
};

router.get('/:view', function (req, res, next) {
    res.render(req.params.view);
});
