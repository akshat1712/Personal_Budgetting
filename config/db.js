const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGO_DB);
  try {
    const client = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error is here", err);
    process.exit(1);
  }
};

module.exports = connectDB;
