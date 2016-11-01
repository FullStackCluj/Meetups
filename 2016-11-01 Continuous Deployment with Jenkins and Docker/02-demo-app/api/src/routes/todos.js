var router = require('express').Router();
var todos = require('../controllers/todos');

router.route('/')
  .get(todos.getAll)
  .post(todos.create);

router.route('/:todo_id')
  .get(todos.getById)
  .put(todos.update)
  .delete(todos.delete);

module.exports = router;
