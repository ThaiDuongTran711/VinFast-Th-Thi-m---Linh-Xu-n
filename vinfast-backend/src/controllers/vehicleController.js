const Vehicle = require("../models/Vehicle");

// GET ALL VEHICLES
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE VEHICLE (test)
exports.createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    const saved = await vehicle.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};