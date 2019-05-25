const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Topic = require('../models/topics');

// Post'/topics'	
router.post('/',(req,res)=> {
  const {topic, image} = req.body;

  Topic.create({ topic, image })
    .then((response)=> {
      res.status(201).json(response);
    })
    .catch((err)=> {
      res.status(500).json(err)
    })
})
// GET '/topics'	
router.get('/', (req, res, next) => {
  Topic.find()
    .then(allTheProjects => { res.json(allTheProjects);})
    .catch(err => {res.json(err);})
});

// // GET '/topic'		
// router.get('/topic', (req, res) => {
//   const { topic, image } = req.params;

//   Topic.findById( topic )
//     .then( (foundProject) => {
//       res.status(200).json(foundProject);
//     })
//     .catch((err) => {
//       res.res.status(500).json(err);
//     })
//   });

// // Post'/topic'	
// router.post('/topic',(req,res)=> {
//   const {topic, image} = req.body;

//   Topic.create({ topic, image })
//     .then((response)=> {
//       res.status(201).json(response);
//     })
//     .catch((err)=> {
//       res.status(500).json(err)
//     })
// })






module.exports = router;