
// Imports
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
/**
 * Declare Important Variables
 */

const PORT = process.env.PORT || 3000;
const name = process.env.NAME; // <-- NEW

/**
 * Setup Express Server
 */
const app = express();

/**
 * Declare Routes
 */

app.get('/', (req, res) => {
    res.send(`Hello, ${name}!`); // <-- UPDATED
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
});

// Start the server and listen on the specified port

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});