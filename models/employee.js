/* jshint indent: 2 */

module.exports.employee = function (sequelize, DataTypes) {
  var Task = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    email_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
      tableName: 'employee',
      underscored: true
    });
  return Task;
};
