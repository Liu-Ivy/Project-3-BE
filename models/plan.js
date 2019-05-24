const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  topic: String,
  Description: String,
  Duration: String,
  image: String,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
