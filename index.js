// Import packages as required.

// The dotenv package enables us to read the values from .env:
// the config() function exposes the information contained. Ex: process.env.PORT .
require('dotenv').config();

console.log(process.env.PORT);