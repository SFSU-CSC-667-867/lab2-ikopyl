const express = require('express');
const server = express();
const PORT = process.env.port || 3000;

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Ilya\'s server!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
