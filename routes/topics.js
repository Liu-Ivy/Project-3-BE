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


// // GET '/topics:topic'		
// router.get('/subjects/:topic', (req, res) => {
//   const { topic } = req.params;

//   Topic.findById( topic )
//     .then( (foundProject) => {
//       res.status(200).json(foundProject);
//     })
//     .catch((err) => {
//       res.res.status(500).json(err);
//     })
//   });

// GET '/topics/:id'		
router.get('/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params;

  Topic.findById( id ).populate('tasks')
    .then( (foundTopic) => {
      res.status(200).json(foundTopic);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
  });



// PUT '/topics/:id'
router.put('/:id', (req, res, next)=>{

  console.log(req.params)

  Topic.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Topic with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})






module.exports = router;