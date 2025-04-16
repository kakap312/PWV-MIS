const {Sequelize,DataTypes, Model }  = require('sequelize') ;

const sequelize = new Sequelize('pwvdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = {
sequelize,DataTypes, Model 
}