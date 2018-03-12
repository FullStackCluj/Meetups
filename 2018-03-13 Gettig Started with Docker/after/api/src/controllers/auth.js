const password = require('../utils/password');
const generateToken = require('../utils/generateToken');
const User = require('../models').user;

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {email: req.body.email}
    });
    
    if (!user) {
      throw new Error('Access Denied.');
    }

    if (!password.verifyPassword(req.body.password, user.password, user.salt)) {
      throw new Error('Authentication failed. Wrong password.');
    }

    res.status(200).json({success: true, data: await auth(user)});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

module.exports.currentUser = async (req, res) => {
  try {
    res.status(200).json({success: true, data: req.user});
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong.', error});
  }
};

const auth = async (user) => {
  // get user permissions

  const token = generateToken({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    image: user.image,
  });
  return token;
};
