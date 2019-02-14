const express = require('express');
const axios = require('axios');

const server = express();
const PORT = 3001;

server.get('/world', (req, res) => {
    console.log(req.query);
    res.send('<h1>Hello, Network!</h1>');
});

server.get('/network', (req, res) => {
    console.log(req.query)
    axios.get(`http://localhost:3000/hello?name=${req.query.name}`)
    .then((networkResponse) => {
        res.send(networkResponse.data);
    })
    .catch(() => {
        res.send(500, '<h3>HTTP 500 Error: Unable to connect to localhost:3000</h3>');
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
