const express = require('express');
const server = express();
const PORT = process.env.port || 3000;

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

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
