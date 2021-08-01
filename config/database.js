const { Sequelize } = require('sequelize');

module.exports= new Sequelize('Northwind', 'postgres', '12345', {
  host:'localhost',
  dialect:'postgres'
  
});