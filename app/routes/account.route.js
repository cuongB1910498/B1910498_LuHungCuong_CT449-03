const express = require('express');
const account  = require('../controllers/account.controller');

const acc_router = express.Router();

acc_router.route("/register")
    .post(account.register);

acc_router.route("/login")
    .post(account.login);

module.exports = acc_router;