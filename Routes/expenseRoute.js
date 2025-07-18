// routes/expenseRoute.js

const express = require("express");
const router = express.Router();
const {
  addIncome,
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
  getSummary
} = require("../Controllers/expenseController");
const { protect } = require('../middlewares/authMiddleware');

// Income
router.post("/income",protect, addIncome);
// Expenses
router.post("/expense",protect, addExpense);
router.get("/expenses",protect, getExpenses);
router.delete("/expense/:id",protect, deleteExpense);
router.put("/expense/:id",protect, updateExpense);
// Summary
router.get("/summary",protect, getSummary);

module.exports = router;