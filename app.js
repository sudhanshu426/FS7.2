const express = require('express');
const path = require("path");
const cors = require('cors'); 

const app = express();
const port = 3000;

// --- 1. Middleware ---
app.use(cors()); // Allow browser requests

// --- 2. Frontend HTML Route ---
// Serves the index.html file, which is our React App
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- 3. Start Server ---
app.listen(port, '0.0.0.0', () => {
    console.log(React app server running on port ${port});
    console.log(Use the ByteXL 'Preview' button for port 3000.);
});
