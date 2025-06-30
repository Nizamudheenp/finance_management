import { useEffect, useState } from 'react';
import Chart from '../Components/Chart';
import API from '../config/Api';
import PieChart from '../Components/PieChart';
import MonthlyBarChart from '../Components/MonthlyBarChart';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [monthlyData, setMonthlyData] = useState({});
    const [balance, setBalance] = useState(0);
    const monthlyLimit = 10000;
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await API.get('/transactions', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTransactions(res.data.transactions);
            } catch (err) {
                console.error('Error fetching transactions', err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const incomeTotal = transactions
            .filter((t) => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const expenseTotal = transactions
            .filter((t) => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        setIncome(incomeTotal);
        setExpense(expenseTotal);
        setBalance(incomeTotal - expenseTotal);

        const monthly = {};
        transactions.forEach((t) => {
            const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
            monthly[month] = (monthly[month] || 0) + (t.type === 'expense' ? t.amount : 0);
        });
        setMonthlyData(monthly);

        const currentMonth = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
        if ((monthly[currentMonth] || 0) > monthlyLimit) {
            setShowAlert(true);
        }


    }, [transactions]);


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className='flex justify-between items-center py-2'>
                <h1 className="text-2xl font-bold ">Dashboard</h1>
                <Link to="/add/transaction"  className="text-white text-lg font-semibold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
                    Add New
                </Link>
            </div>
            {showAlert && (
                <div className="bg-red-100 text-red-700 p-3 rounded my-6 text-center font-semibold">
                    🔔 Alert: You exceeded your monthly spending limit of ₹{monthlyLimit}!
                </div>
            )}

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
                <div className="bg-green-100 p-4 rounded shadow">
                    <h2 className="text-lg font-medium text-green-700">Total Income</h2>
                    <p className="text-2xl font-bold text-green-800">₹ {income}</p>
                </div>
                <div className="bg-red-100 p-4 rounded shadow">
                    <h2 className="text-lg font-medium text-red-700">Total Expense</h2>
                    <p className="text-2xl font-bold text-red-800">₹ {expense}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded shadow">
                    <h2 className="text-lg font-medium text-blue-700">Balance</h2>
                    <p className="text-2xl font-bold text-blue-800">₹ {balance}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mt-4">
                <Chart income={income} expense={expense} />
                <MonthlyBarChart data={monthlyData} />
                <PieChart transactions={transactions} type="income" />
                <PieChart transactions={transactions} type="expense" />
            </div>
        </div>
    );

};

export default Dashboard;
