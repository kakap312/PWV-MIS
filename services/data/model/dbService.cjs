//const { DataTypes, Model }  = require ('sequelize');
const { sequelize,DataTypes, Model} = require('../../../core/dbcontext.cjs');


class DBServices extends Model {}
DBServices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey:true
          },
          category: {
            type: DataTypes.INTEGER,
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
      modelName: 'Services', // We need to choose the model name
    }
)


 DBServices.sync().then(res => {
  console.log("Table created successfully");
});

//module.exports = DBBooks

