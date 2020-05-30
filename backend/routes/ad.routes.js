let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let adSchema = require('../models/Ad');

router.route('/create-ad').post((req, res) => {
    adSchema.create(req.body, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

router.route('/').get((req, res) => {
    adSchema.find((error, data) => {
        if (error) {
            console.log(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/get-ad/:id').get((req, res) => {
    adSchema.find({_id: req.params.ad}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/random-ad/:random').get((req, res) => {
    console.log(req.params.random);
    adSchema.findOne().skip(req.params.random,
         (err, result) => {
            // Tada! random user
            console.log(result)
        });
});

module.exports = router;