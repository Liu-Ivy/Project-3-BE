const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Plan = require('../models/plan');


// // Post'/profile'	
// router.post('/profile',(req,res)=> {
//   const { username, password, location, plans } = req.body;

//   User.create({ username, password, location, plans })
//     .then((response)=> {
//       res.status(201).json(response);
//     })
//     .catch((err)=> {
//       res.status(500).json(err)
//     })
// })
// Match the Plan into User
router.get('/profile',(req,res)=> {
    User.findOneById().populate('Plan')
      .then((user) =>{
          console.log(user);
                      })
      .catch((reason) =>{
          console.log(reason);
          });
    })

module.exports = router;