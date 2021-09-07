'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscriber.init({
    url:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)*:\d*/
      }
    },
    topic:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Subscriber',
  });
  return Subscriber;
};