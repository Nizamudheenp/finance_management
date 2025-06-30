import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import API from '../config/Api';
import { toast } from 'sonner';

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const transaction = location.state;

  const [formData, setFormData] = useState({
    title: transaction?.title || '',
    amount: transaction?.amount || '',
    type: transaction?.type || 'expense',
    category: transaction?.category || '',
    date: transaction?.date?.slice(0, 10) || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await API.put(`/transactions/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/transactions');
      toast.success('Transaction updated!');
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Transaction</h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="mb-3 w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="mb-3 w-full p-2 border rounded"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mb-3 w-full p-2 border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="mb-3 w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mb-3 w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTransaction;
