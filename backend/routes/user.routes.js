let mongoose = require('mongoose');
express = require('express');
bodyParser = require('body-parser');
router = express.Router();
const multer = require("multer");
path = require('path');
app = express()
app.use(bodyParser.urlencoded({extended: true}))
//file upload

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'public');
  },
  filename: function(req, file, cb){
    cb(null, "FILE-" + Date.now() + path.extname(file.originalname));
  }
});

upload = multer({storage}).single('acta');

const obj = (req,res) => {
  upload(req, res, () => {
     console.log("Request ---", req.body);
     console.log("Request file ---", req.file); //Here you get file.
     var query = {'email': req.body.user}
     userSchema.findOneAndUpdate({'email': 'riveratwister2@gmail.com'},{acta: req.body.acta}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
     })
  });
}

router.post("/acta", obj);

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