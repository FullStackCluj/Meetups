var thinky = require('../lib/thinky');
var type = thinky.type;

module.exports = thinky.createModel("Todo", {
  id: type.string(),
  name: type.string().required(),
  description: type.string(),
  completed: type.boolean().default(false),
  created_at: type.date(),
  updated_at: type.date()
});
