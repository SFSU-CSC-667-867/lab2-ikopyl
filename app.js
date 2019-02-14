const express = require('express');
const server = express();

const PORT = process.env.port || 3000;

server.get('/', (req, res) => { 
    res.send('Welcome to the Ilya\'s server!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
