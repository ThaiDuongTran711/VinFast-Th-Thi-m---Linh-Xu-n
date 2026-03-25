const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  id: String,
  name: String,
  range: String,
  hp: Number,
  price: Number, // ⚠️ sửa thành number
  image: String,
  description: String,

  specs: Object,     // giữ nguyên vì bạn dùng object
  gallery: [String],
  features: [String],
}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);