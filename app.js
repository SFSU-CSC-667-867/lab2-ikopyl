// console.log('Hello World');

const express = require('express');
const server = express();

const PORT = process.env.port || 3000;

server.get('/', (req, res) => { 
    res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
