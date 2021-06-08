const Account = require('../accounts/accounts-model');

exports.checkAccountPayload = (req, res, next) => {};

exports.checkAccountNameUnique = (req, res, next) => {};

exports.checkAccountId = (req, res, next) => {
  Account.getById(req.params.id)
    .then((account) => {
      if (!account) {
        res.status(404).json({
          error: 'account not found',
        });
      } else {
        req.account = account;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};
