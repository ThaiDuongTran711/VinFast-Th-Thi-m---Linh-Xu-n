require("dotenv").config();
const mongoose = require("mongoose");

const Vehicle = require("./models/Vehicle.js");
const { serviceVehicles, familyVehicles } = require("./data/vehicles.js");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    // XÓA DATA CŨ
    await Vehicle.deleteMany();

    // GỘP DATA
    const allVehicles = [...serviceVehicles, ...familyVehicles];

    // INSERT
    await Vehicle.insertMany(allVehicles);

    console.log("Data inserted");
    process.exit();
  })
  .catch(err => console.log(err));