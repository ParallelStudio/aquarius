'use strict';

const express = require('express');
const http = require('http');

const PORT = 8080;
console.log('Starting http server...');

const app = express();
const server = http.createServer(app);

app.use(express.static(`${__dirname}/../../static`));
server.listen(8080, () => {
  console.log(`Web server listening on port ${PORT}`);
});
