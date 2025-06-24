const Transaction = require('../models/transactionmodel');


exports.createTransaction = async (req, res) => {
    const { title, amount, type, category, date } = req.body;
    if (!title || !amount || !type) {
        return res.status(400).json({ message: 'title, amount and type are required' });
    }
    try {
        const transaction = await Transaction.create({
            title,
            amount,
            type,
            category,
            date,
            userId: req.userId
        });
        res.status(201).json({ message: "transaction created", data: transaction });
    } catch (error) {
        res.status(500).json({ message: 'adding transaction failed', error });
    }
}

exports.getTransaction = async (req, res) => {
    try {
        const { category, start, end } = req.query;
        let filter = { userId: req.userId };
        if (category) filter.category = category;
        if (start || end) {
            filter.date = {}
            if (start) filter.date.$gte = new Date(start);
            if (end) filter.date.$lte = new Date(end);
        }
        const transactions = await Transaction.find(filter);
        res.status(200).json({ transactions });
        
    } catch (error) {
        res.status(500).json({ message: 'retrieving transactions failed', error });
    }
}

exports.editTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            req.body,
            { new: true }
        );
        res.status(201).json({ message: "transaction updated", data: transaction })
    } catch (error) {

    }
}

exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findOneAndDelete(
            { _id: req.params.id, userId: req.userId }
        );
        res.status(200).json({ message: "transaction deleted" })
    } catch (error) {
        res.status(500).json({ msg: 'failed to delete transaction', error });
    }
}