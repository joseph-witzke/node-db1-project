const express = require('express');

const AccountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Testing, testing.</h2>`);
});

module.exports = server;
