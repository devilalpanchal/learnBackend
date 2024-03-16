// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Node.js and Express.js application.');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Create a new directory for your project and navigate into it.
// Initialize a new Node.js project by running npm init and follow the prompts to create a package.json file.
// Install Express.js by running npm install express.

// Save the file and run the application by executing node app.js.
// Open your web browser and visit http://localhost:3000. You should see the message "Hello, World!" displayed.