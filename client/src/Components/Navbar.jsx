// src/Components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          FinanceApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <Link to="/transactions" className="hover:underline">Transactions</Link>
              <Link to="/add/transaction" className="hover:underline">Add</Link>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
