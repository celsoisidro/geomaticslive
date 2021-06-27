var express = require('express');
var Image = require('../models/images')
var router = express.Router();

router.get('/travel_cairns', function(req, res, next) {
    Image.find(function(err, images) {
        if (err) console.log(err)

        res.render('travel_cairns', { title: 'Images', images: images });
    });
});

module.exports = router;