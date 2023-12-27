const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3001;
const insertUser = require('./controller/insert');
const { findAllUsers, findUserByName } = require('./controller/find');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/quriesDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example of inserting a single document
app.post('/insert', async (req, res) => {
  try {
    const savedUser = await insertUser();
    res.json(savedUser);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example of finding all documents in the User collection
app.get('/find', findAllUsers);

// Example of finding a single document by name
app.get('/find/:name', findUserByName);

app.listen(port, () => {
  console.log('Server Working');
});
