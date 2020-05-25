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

router.route('/get-ad').get((req, res) => {
    adSchema.find({email: req.query.email}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;
