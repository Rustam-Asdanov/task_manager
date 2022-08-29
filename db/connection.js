const mongoose = require("mongoose");

// This type does NOT effective.
// If we run project first start server
// then project will connect to database
// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("CONNECTED TO THE DB...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
