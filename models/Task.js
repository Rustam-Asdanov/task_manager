const mongoose = require("mongoose");

const TaksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  compleated: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaksSchema);
