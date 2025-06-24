import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config/Api';

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
    } catch (err) {
      setError('Failed to add transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="mb-3 w-full p-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="mb-3 w-full p-2 border rounded"
      />
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="mb-3 w-full p-2 border rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="mb-3 w-full p-2 border rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="mb-3 w-full p-2 border rounded"
      />
      <button className="bg-blue-500 text-white w-full py-2 rounded">Add</button>
    </form>
  );
};

export default TransactionForm;
