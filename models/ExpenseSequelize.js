const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ExpenseTracker = sequelize.define('ExpenseTracker',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    amt:{
        type:Sequelize.DOUBLE,
        allowNull:false,
    },
    desc:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = ExpenseTracker;