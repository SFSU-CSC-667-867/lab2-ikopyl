const express = require('express');
const axios = require('axios');

const server = express();
const PORT = process.env.port || 3001;

server.get('/world', (req, res) => {
    console.log(req.query);
    res.send('<h1>Hello, Network!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
