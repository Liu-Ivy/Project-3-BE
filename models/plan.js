const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  topic: String,
  title: String,
  description: String,
  duration: Number,
  imageUrl: String,
  location: String,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
