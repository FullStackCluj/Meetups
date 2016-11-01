"use strict";

var moment = require('moment');
var todos = require('../repos/todosRepo');

module.exports.getAll = function (req, res) {
  var handler = err => res.status(404).json({success: false, message: err.message});

  todos.count()
    .then(function (count) {
      if (count <= 0){
        return res.json({data: [], meta: {count: 0}});
      }
      todos.getAll()
        .then(list => res.json({ data: list, meta: { count: count }}))
        .catch(handler)
    })
    .catch(handler)
};

module.exports.getById = function (req, res) {
  var handler = err => res.status(404).json({success: false, message: err.message});
  todos.getById(req.params.todo_id)
    .then(todo=>res.json(service))
    .catch(handler)
};


module.exports.create = function (req, res) {
  var handler = err => res.status(404).json({success: false, message: err.message});
  var now = moment().format();
  req.body.created_at = now;
  req.body.updated_at = now;
  todos.create(req.body)
    .then(function (todo) {
      res.setHeader("Location", '/todo/'+todo.id);
      res.status(201);
      res.send();
    })
    .catch(handler)
};

module.exports.update = function (req, res) {
  var handler = err => res.status(404).json({success: false, message: err.message});
  req.body.updated_at = moment().format();
  todos.update(req.params.todo_id, req.body)
    .then(function (todo) {
      res.setHeader("Location", '/todo/'+todo.id);
      res.status(204);
      res.send();
    })
    .catch(handler)
}

module.exports.delete = function (req, res) {
  var handler = err => res.status(404).json({success: false, message: err.message});
  todos.delete(req.params.todo_id)
    .then(function () {
      res.status(200).json({success: true, message: "Entity has been deleted" })
    })
   .catch(handler)
};
