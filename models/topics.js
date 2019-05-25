const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const topicSchema = new Schema({
  topic: String,
  img: String
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;

