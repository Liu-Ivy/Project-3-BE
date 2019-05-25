const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Plan = require('../models/plan');

// GET '/plan'		
router.get('/', (req, res) => {
  // const { topic, image } = req.params;

  Plan.find()
    .then( (foundProject) => {
      res.status(200).json(foundProject);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
  });

// // Post'/plan'	
// router.post('/',(req,res)=> {
//   const {topic, image} = req.body;

//   Topic.create({ topic, image })
//     .then((response)=> {
//       res.status(201).json(response);
//     })
//     .catch((err)=> {
//       res.status(500).json(err)
//     })
// })

// GET '/topic/:id'		
router.get('/:id', (req, res) => {
  console.log('haha',req.params)
  const { id } = req.params;

  Plan.findById( id )
    .then( (foundPlan) => {
      res.status(200).json(foundPlan);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
  });

// // PUT '/topics/:id'
// router.put('/:id', (req, res, next)=>{

//   console.log(req.params)

//   Topic.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       res.json({ message: `Topic with ${req.params.id} is updated successfully.` });
//     })
//     .catch(err => {
//       res.json(err);
//     })
// })





module.exports = router;