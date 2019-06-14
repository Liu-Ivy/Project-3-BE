const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Plan = require('../models/plan');


// get plan from User
router.get('/',(req,res)=> {
  
  const { _id } = req.session.currentUser
  
  User.findById(_id).populate('plans')
     .then((data)=>{
      res.status(200)
       res.json(data)
     })
        .catch((reason) =>{
          console.log(reason);
        });
      })
      


module.exports = router;