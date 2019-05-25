const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  topic: String,
  title: String,
  Description: String,
  Duration: Number,
  image: String,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
