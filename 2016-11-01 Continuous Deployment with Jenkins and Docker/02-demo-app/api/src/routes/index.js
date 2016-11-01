var router = require('express').Router();
var todos = require('./todos');

router.use('/todo', todos);

module.exports = router;
