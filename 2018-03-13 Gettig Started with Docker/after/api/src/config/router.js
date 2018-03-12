const router = require('express').Router();
const userController = require('../controllers/user');
const todoController = require('../controllers/todo');
const authController = require('../controllers/auth');
const { authorize } = require('../middleware');

router.route('/user')
  .get(authorize, userController.getAll)
  .post(userController.create);

router.route('/user/:user_id')
  .get(authorize, userController.get)
  .put(authorize, userController.update)
  .delete(authorize, userController.remove);

router.route('/todo')
  .get(authorize, todoController.getAll)
  .post(authorize, todoController.create);

router.route('/todo/:todo_id')
  .get(authorize, todoController.get)
  .put(authorize, todoController.update)
  .delete(authorize, todoController.remove);

router.route('/auth/login')
  .post(authController.login);


router.route('/auth/current-user')
  .get(authorize, authController.currentUser);

module.exports = router;