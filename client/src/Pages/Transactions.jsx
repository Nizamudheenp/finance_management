import { useEffect, useState } from 'react';
import API from '../config/Api';
import FilterBar from '../Components/FilterBar';
import TransactionList from '../Components/TransactionList';
import { useNavigate } from 'react-router-dom';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    startDate: '',
    endDate: '',
  });

  const navigate = useNavigate();

  const fetchAllTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/transactions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data.transactions);
    } catch (err) {
      console.error('Failed to fetch transactions:', err);
    }
  };

  const fetchFilteredTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.post('/transactions/filter', filters, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data.transactions);
    } catch (err) {
      console.error('Failed to fetch filtered transactions:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await API.delete(`/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAllTransactions(); 
    } catch (err) {
      console.error('Failed to delete transaction', err);
    }
  };

  const handleEdit = (transaction) => {
    navigate(`/edit/${transaction._id}`, { state: transaction });
  };

  useEffect(() => {
    fetchAllTransactions(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        onSearch={fetchFilteredTransactions} 
      />
      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Transactions;
