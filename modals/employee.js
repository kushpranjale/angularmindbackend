const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
  emp_id: {
    type: String,
    require: true,
    unique: true,
  },
  emp_name: {
    type: String,
    require: true,
  },
  emp_email: {
    type: String,
    require: true,
  },
  emp_age: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("empSchema", empSchema);
