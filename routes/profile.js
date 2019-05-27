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
// get plan from User

const plans = []
router.get('/',(req,res)=> {
  const { _id } = req.session.currentUser
  console.log('id', _id)
  User.findById(_id)
     .then((user)=>{
       user.plans.forEach((plan) => {
          Plan.findById(plan)
          .then((plan) => {
            plans.push(plan)
          })
          .catch((reason) =>{
            console.log(reason);
          });
        })
        .catch((reason) =>{
          console.log(reason);
        });
      })
      .then(() => {
        console.log('plans', plans)
      res.status(200);
      res.json({
        plans: plans
      })
      .catch((reason) =>{
        console.log(reason);
      });
    })

    // User.findOneById().populate('Plan')
    //   .then((user) =>{
    //       console.log(user);
    //                   })
    //   .catch((reason) =>{
    //       console.log(reason);
    //       });
    })

module.exports = router;