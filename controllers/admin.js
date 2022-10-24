const Expense = require('../models/ExpenseSequelize');

exports.postExpense = (req, res, next) =>{
    const amt = req.body.amt;
    const desc = req.body.desc;
    const category = req.body.category;

    Expense.create({
        amt:amt,
        desc:desc,
        category:category
    }).then(resolve =>{
        console.log('Expense Posted to the Table');
        res.header('Content-Type','application/json');
        res.send(JSON.stringify(resolve.dataValues));
    }).catch(err => {console.log(err)})
}

exports.getAllExpenses = (req,res,next)=>{
    console.log("Searching started");
    Expense.findAll().then(resolve =>{
        console.log("Searching ended");
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(resolve));
    }).catch(err => console.log(err))
}

exports.deleteExpense = (req, res, next)=>{
    const expenseId = req.params.expenseId;
    Expense.findByPk(expenseId).then(result =>{
        console.log("deleting started");
        return result.destroy()
    }).then(resolve =>{
        console.log(` ${expenseId} Successfully deleted`);
    }).catch(err => {console.log(err);})
}