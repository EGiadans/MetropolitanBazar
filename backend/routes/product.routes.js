let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let productSchema = require('../models/Product');
const cloudinary = require('cloudinary');

cloudinary.config({
    /*
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
     */
    cloud_name: 'dvg0v2vjr',
    api_key: '899437782796122',
    api_secret: '-zNhgHskESyov3K3HHkkB0YKCww'
});

router.route('/image-upload').post((req, res) => {
    const values = Object.values(req.files);
    const promises = values.map(image => cloudinary.uploader.upload(image.path));
    Promise
        .all(promises)
        .then(results => res.json(results))
});

router.route('/create-product').post((req, res, next) => {
    productSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    productSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

router.route('/edit-product/:id').get((req, res) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

router.route('/update-product/:id').put((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data);
            console.log('Student updated successfully !')
        }
    })
});

router.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

router.route('/get-product/:id').get((req, res) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return (error)
        } else {
            res.json(data)
        }
    })
});

router.route('/search/:search').get((req, res) => {
    productSchema.find({ name: {$regex: '.*' + req.params.search + '.*'} }, (error, data) => {
        if (error) {
            return error;
        } else {
            res.json(data)
        }
    })
});

module.exports = router;
