const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require("multer");
const uuid = require("uuid");
const path = require('path');

// User Model
let userSchema = require('../models/User');

//file upload

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log('destination creaated?')
    callback(null, 'public/actas');
  },
  filename: (req, file, callback) => {
    console.log('filename stored')
    callback(null, uuid.v4().toString() + "_" + file.originalname);
  }
});

const upload = multer({storage: storage}).single('myActa');

const obj = (req,res) => {
  console.log(req.files)
  upload(req, res, (err) => {
     if (err){
       console.log(err)
       return
     } else {
       console.log('file uploaded')
     }
  });
}

router.post("/acta", obj);


// CREATE User
router.route('/create-user').post((req, res) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// CREATE User wish
router.route('/make-wish').post((req, res) => {
  let wish = {
    "name": req.body.name,
    "refId": req.body.id,
    "imgn": req.body.imgn
  }
  userSchema.findOneAndUpdate({email: 'riveratwister2@gmail.com'}, {
    $push: {wishes: wish}}, (error, data) => {
    if (error) {
      console.log(error)
      console.log('algo paso')
    } else {
      res.sendStatus(200)
      console.log(wish)
      console.log('wish made')
    }
  })
});

router.route('/login-user').post((req, res) => {
  userSchema.find({email: req.body.email, hashpassword: req.body.password}, (error, data) => {
    if (data.length) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  })
});

router.route('/profile').get((req, res) => {
  userSchema.find({email: req.query.email}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/wishlist').get((req, res) => {
  userSchema.find({email: req.query.email}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data.wishes)
    }
  })
})

// READ User
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update User
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete User
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
