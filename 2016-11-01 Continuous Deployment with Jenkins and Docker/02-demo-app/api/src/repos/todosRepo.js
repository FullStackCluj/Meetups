var Todo = require('../models/Todo');
var thinky = require('../lib/thinky');
var r = thinky.r;

module.exports.getAll = function () {
  return Todo.run();
}

module.exports.count = function () {
  return Todo.count().execute();
}

module.exports.getById = function (id) {
  return Todo.get(id).run();
}

module.exports.create = function (data) {
  return Todo.save(data)
}

module.exports.update = function (id, data) {
  return Todo.get(id).update(data).run()
}

module.exports.delete = function (id) {
  return Todo.get(id).run()
    .then(function (todo) {
      todo.delete()
    })
}
