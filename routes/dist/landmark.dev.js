"use strict";

var express = require('express');

var router = express.Router();
router.get('/landmark', function (req, res) {
  res.render('landmark', {
    title: "geomaticslive"
  });
});
module.exports = router;