let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// User Model
let userSchema = require('../models/User');

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

//LOGIN user
router.route('/login-user').post((req, res) => {
  userSchema.find({email: req.body.email, hashpassword: req.body.password}, (error, data) => {
    if (data.length) {
      console.log(data)
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  })
});

router.route('/profile').get((req, res) => {
  userSchema.find({email: 'riveratwister2@gmail.com', hashpassword: 'test'}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
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