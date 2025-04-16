//const { DataTypes, Model }  = require ('sequelize');
const { sequelize,DataTypes, Model} = require('../../../core/dbcontext.cjs');


class DBServiceCategory extends Model {}
DBServiceCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey:true
          },
          name: {
            type: DataTypes.STRING,
            allowNull:false,
            // allowNull defaults to true
          },
          createdAt:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
          },
          updatedAt:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
          }
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Service_category', // We need to choose the model name
    }
)


DBServiceCategory.sync().then(res => {
  console.log("Table created successfully");
});

//module.exports = DBBooks

