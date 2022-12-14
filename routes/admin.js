const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();


router.post('/post-Expense',adminController.postExpense);
router.get('/get-Expenses',adminController.getAllExpenses);
router.get('/delete-Expense/:expenseId',adminController.deleteExpense);


module.exports = router;