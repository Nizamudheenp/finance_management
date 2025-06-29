import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-cyan-400">
            FinanceApp
          </Link>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
                <Link to="/transactions" className="hover:text-cyan-400">Transactions</Link>
                <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-cyan-400">Login</Link>
                <Link to="/register" className="hover:text-cyan-400">Register</Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-3xl focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-xl font-bold text-cyan-400">Menu</span>
          <button onClick={closeSidebar} className="text-xl">
            ✖
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4 text-sm font-medium">
          <Link to="/" onClick={closeSidebar} className="hover:text-cyan-400">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" onClick={closeSidebar} className="hover:text-cyan-400">Dashboard</Link>
              <Link to="/transactions" onClick={closeSidebar} className="hover:text-cyan-400">Transactions</Link>
              <Link to="/add/transaction" onClick={closeSidebar} className="hover:text-cyan-400">Add</Link>
              <button
                onClick={() => {
                  handleLogout();
                  closeSidebar();
                }}
                className="text-left hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeSidebar} className="hover:text-cyan-400">Login</Link>
              <Link to="/register" onClick={closeSidebar} className="hover:text-cyan-400">Register</Link>
            </>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        ></div>
      )}
    </>
  );
};

export default Navbar;
