const express = require('express');

const AccountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    custom: 'something went wrong with your request',
    message: err.message,
    stack: err.stack,
  });
});

server.get('/', (req, res) => {
  res.send(`<h2>Testing, testing.</h2>`);
});

module.exports = server;
