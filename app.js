const express = require('express');
const axios = require('axios');

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Ilya\'s server!</h1>');
});

server.get('/hello', (req, res) => {
    console.log(req.query);
    res.send('<h1>Hello ' + req.query.name + '</h1>');
});

server.get('/add', (req, res) => {
    res.send('<h1>0</h1>');
});

server.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data);
    })
    .catch(() => {
        res.send('sorry :( the request did not work');
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
