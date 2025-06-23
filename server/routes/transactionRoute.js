const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createTransaction, getTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController');
const router = express.Router();

router.post('/',authMiddleware,createTransaction);
router.get('/',authMiddleware,getTransaction);
router.put('/:id',authMiddleware,editTransaction);
router.delete('/:id',authMiddleware,deleteTransaction);

module.exports = router;