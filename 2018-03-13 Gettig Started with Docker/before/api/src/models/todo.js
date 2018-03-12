module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN(100),
      allowNull: false,
    },
  }, {
    tableName: 'todos',
    underscored: true,
  });

  return Todo;
};
