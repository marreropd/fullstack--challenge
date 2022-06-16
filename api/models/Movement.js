module.exports = (sequelize, Model, DataTypes) => {
  class Movement extends Model {}

  Movement.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "movement",
    },
  );

  return Movement;
};
