const express = require('express');
const path= require('path');
const compression = require('compression')
const cors = require('cors');
const server = express();
server.use(compression({threshold: 0}));
server.use(cors());

server.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname + '/data/original.json'));
});

const port = 8000;
server.listen(process.env.PORT || port);