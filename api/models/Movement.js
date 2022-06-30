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
      category: {
        type: DataTypes.STRING,
        defaultValue: "Otros",
      },
    },
    {
      sequelize,
      modelName: "movement",
    },
  );

  return Movement;
};
