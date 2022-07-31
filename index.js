const express = require('express');
const path= require('path');
var cors = require('cors');
const server = express();
server.use(cors({
    origin: '*'
  }))

server.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname + '/data/original.json'));
})

const port = 8000;
server.listen(port);