// const express = require('express');
// const createError = require('http-errors');

// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require('../models/user');

// // username: String,
// // password: String,
// // location: String,
// // plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],

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
// // GET '/topics'	
// router.get('/profile', (req, res, next) => {
//   User.find()
//   .then( (findUser) => {
//     res.status(200).json(findUser);
//   })
//   .catch((err) => {
//     res.res.status(500).json(err);
//   })
// });