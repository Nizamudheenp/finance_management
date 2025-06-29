import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/Protected";
import Dashboard from "./Pages/Dashboard";
import AddTransaction from "./Pages/AddTransaction";
import Transactions from "./Pages/Transactions";
import EditTransaction from "./Pages/EditTransaction";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 overflow-x-hidden">
        <Navbar />

        <main className="px-4 md:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add/transaction"
              element={
                <ProtectedRoute>
                  <AddTransaction />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/transactions/:id"
              element={
                <ProtectedRoute>
                  <EditTransaction />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
