const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Plan = require('../models/plan');
const User = require('../models/user');
const parser = require('../config/cloudinary');

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

// Post'/plan'	
router.post('/',(req,res)=> {
  const {title, topic, description, imageUrl, duration, location} = req.body;
  const newPlan = new Plan({title, topic, description, imageUrl, duration, location})
  

  const id = req.session.currentUser._id
  const updateUser = User.findByIdAndUpdate(id, {$push: {plans: newPlan._id}})
  const savePlan = newPlan.save();

  Promise.all([updateUser, savePlan])
    .then((response)=> {
      res.status(201).json(response);
    })
    .catch((err)=> {
      res.status(500).json(err)
    })
})

// GET '/topic/:id'		
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Plan.findById( id )
    .then( (foundPlan) => {
      res.status(200).json(foundPlan);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
  });

  //PUT '/topics/:id'
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

router.post('/image', parser.single('photo'), (req, res, next) => {
  console.log('file upload');
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  res.json(imageUrl).status(200);
});




module.exports = router;