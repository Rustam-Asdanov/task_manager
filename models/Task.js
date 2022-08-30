const mongoose = require("mongoose");

const TaksSchema = new mongoose.Schema({
  name: String,
  compleated: Boolean,
});

module.exports = mongoose.model("Task", TaksSchema);
