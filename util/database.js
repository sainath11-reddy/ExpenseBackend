const Sequelize = require("sequelize");
const sequelize = new Sequelize('expenseTracker', 'root','sonysony@abc',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;


