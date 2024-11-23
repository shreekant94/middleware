const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submissions
app.post('/submit', (req, res) => {
    console.log('Incoming Request Data:', req.body);
    res.json(req.body); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
        