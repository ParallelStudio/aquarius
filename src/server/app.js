'use strict';

const express = require('express');
const http = require('http');

const PORT = 8080;
console.log('Starting http server...');

const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
})

const server = http.createServer(app);

app.use(express.static(`${__dirname}/../../static`));
server.listen(8080, () => {
  console.log(`Web server listening on port ${PORT}`);
});
