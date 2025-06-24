import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Finance Management System
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Track your income, expenses, visualize spending trends, and take control of your finances.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 rounded shadow hover:shadow-lg transition bg-blue-50">
            <img
              src="https://img.icons8.com/ios-filled/100/budget.png"
              alt="Budget"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Budgeting</h3>
            <p className="text-gray-600 text-sm">
              Plan your monthly spending and stick to your budget with ease.
            </p>
          </div>
          <div className="p-6 rounded shadow hover:shadow-lg transition bg-blue-50">
            <img
              src="https://img.icons8.com/ios-filled/100/combo-chart.png"
              alt="Chart"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Charts</h3>
            <p className="text-gray-600 text-sm">
              Visualize income vs expense and category-wise breakdown using charts.
            </p>
          </div>
          <div className="p-6 rounded shadow hover:shadow-lg transition bg-blue-50">
            <img
              src="https://img.icons8.com/ios-filled/100/money.png"
              alt="Transactions"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Transaction Tracker</h3>
            <p className="text-gray-600 text-sm">
              Add, edit, delete transactions and keep records organized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
