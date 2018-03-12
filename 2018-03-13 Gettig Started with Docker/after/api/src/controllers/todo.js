const Todo = require('../models').todo;

module.exports.getAll = async (req, res) => {
  try {
    const todos = await Todo.findAll({user: req.user.id});
    res.status(200).json({success: true, data: todos});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.create = async (req, res) => {
  try {
    const data = req.body;

    await Todo.create(data);

    res.status(201).json({success: true});

  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.get = async (req, res) => {
  try {
    const todo = await Todo.find({where: {id: req.params.todo_id}});
    res.status(200).json({success: true, data: todo});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.update = async (req, res) => {
  try {
    const todo = await Todo.find({where: {id: req.params.todo_id}});

    if (!todo) {
      throw new Error('Todo does not exist.');
    }

    let data = req.body;

    await Todo.update(data, {where: {id: todo.id}});
    
    res.status(200).json({success: true});

  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Todo.destroy({where: {id: req.params.todo_id}});
    res.status(200).json({success: true});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};