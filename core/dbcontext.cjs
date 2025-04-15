const {Sequelize , DataTypes, Model } = require('sequelize');

  class DbContext {
  dbcontext
  host = "localhost"

   getDBContext (){
    this.dbcontext = new Sequelize('pwvdb', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
    });

    try {
      this.dbcontext.authenticate();
      console.log('Connection has been established successfully.');
      return this.dbcontext;
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  }

module.exports = DbContext
