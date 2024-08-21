const FinancialData = require('../model/model');

// Handler to create a new financial data entry
const createFinancialData = async (req, res) => {
  try {
    const { step, customer, age, gender, zipcodeori, merchant, zipmerchant, category, amount, fraud } = req.body;

    // Create a new financial data entry
    const newData = new FinancialData({
      step,
      customer,
      age,
      gender,
      zipcodeori,
      merchant,
      zipmerchant,
      category,
      amount,
      fraud
    });

    // Save the entry to the database
    await newData.save();

    // Respond with the created entry
    res.status(201).json(newData);
  } catch (err) {
    console.error('Error creating financial data:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Export the controller functions
module.exports = {
  createFinancialData
};
