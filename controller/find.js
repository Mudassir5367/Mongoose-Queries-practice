const User = require('../models/user');

// Example of finding all documents in the User collection
const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error finding documents:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Example of finding a single document by name
const findUserByName = async (req, res) => {
  const { name } = req.params;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error finding document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { findAllUsers, findUserByName };
