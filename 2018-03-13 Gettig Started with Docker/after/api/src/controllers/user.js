const User = require('../models').user;
const moment = require('moment');

const {hashPassword} = require('../utils/password');

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({success: true, data: users.map(user => user.toJSON())});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.create = async (req, res) => {
  try {
    const data = req.body;
    const hash = hashPassword(data.password);
    const now = moment().format('YYYY-MM-DD HH:mm:s');

    Object.assign(data, {
      role_id: data.role_id || 2, //user role
      updated_at: now,
      password: hash.pass,
      salt: hash.salt,
    });

    await User.create(data);

    res.status(201).json({success: true});

  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.get = async (req, res) => {
  try {
    const user = await User.find({where: {id: req.params.user_id}});
    res.status(200).json({success: true, data: user});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.update = async (req, res) => {
  try {
    const user = await User.find({where: {id: req.params.user_id}});

    if (!user) {
      throw new Error('User does not exist.');
    }

    let data = req.body;

    if (data.password) {
      const hash = hashPassword(data.password, user.salt);
      data = {
        ...data,
        password: hash.pass,
        salt: user.salt
      };
    }

    await User.update(data, {where: {id: user.id}});
    
    res.status(200).json({success: true});

  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.remove = async (req, res) => {
  try {
    await User.destroy({where: {id: req.params.user_id}});
    res.status(200).json({success: true});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};