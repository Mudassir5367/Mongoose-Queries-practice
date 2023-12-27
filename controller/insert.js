const User = require('../models/user');  // Adjust the path based on your directory structure

// Example of inserting a single document
const insertUser = async () => {
  try {
    const newUser = new User({
      name: 'sami',  // Provide the desired name
      age: 25,              // Provide the desired age
      email: 'sami@example.com',  // Provide the desired email
    });

    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.error('Error saving document:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = insertUser;
