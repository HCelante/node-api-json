const user = require('./user');
const form = require('./form')
const router = require('express').Router();

router.use('/user', user);
router.use('/form', form);

module.exports = router;