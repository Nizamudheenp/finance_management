import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config/Api';
import { toast } from 'sonner';

const TransactionForm = () => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: '',
    date: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token');
      await API.post('/transactions', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
      toast.success('Transaction added!');
    } catch (err) {
      setError('Failed to add transaction');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg px-8 py-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-2">Add Transaction</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Transaction Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount (₹)"
        value={form.amount}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="text"
        name="category"
        placeholder="Category (e.g., Food, Rent)"
        value={form.category}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
