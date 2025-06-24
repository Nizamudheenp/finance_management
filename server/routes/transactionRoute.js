const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createTransaction, editTransaction, deleteTransaction, getTransactions, getFilteredTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/',authMiddleware,createTransaction);
router.get('/',authMiddleware,getTransactions);
router.post('/filter', authMiddleware, getFilteredTransactions);
router.put('/:id',authMiddleware,editTransaction);
router.delete('/:id',authMiddleware,deleteTransaction);

module.exports = router;