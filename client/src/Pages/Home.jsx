import { Link } from 'react-router-dom';
import budgetImg from "../assets/budget.jpg"
import chartImg from '../assets/chart.jpg'
import dashboardImg from '../assets/dashboard-preview.jpg';
import trackImg from '../assets/track.jpg'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 overflow-x-hidden">
      
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-800">
          Master Your Money with Ease
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl text-gray-600 mb-8">
          A modern finance management system to help you track income, expenses & reach your goals.
        </p>
        <div className="flex gap-4">
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Smart Budgeting",
                desc: "Plan and manage your monthly spending effectively with flexible budgeting tools.",
                img: budgetImg,
              },
              {
                title: "Interactive Charts",
                desc: "Visualize your income vs expenses with real-time charts and trends.",
                img: chartImg,
              },
              {
                title: "Track Everything",
                desc: "Log, edit, and categorize every transaction for total control over your finances.",
                img: trackImg,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src={dashboardImg}
            alt="Dashboard Preview"
            className="w-full md:w-1/2 rounded-lg shadow-xl"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Your Financial Hub</h2>
            <p className="text-gray-600 text-lg mb-4">
              Get a birds-eye view of your financial health with summary cards, category breakdowns,
              and monthly insights — all in one place.
            </p>
            <Link to="/dashboard">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create a free account and log in to your personal finance space.",
              },
              {
                step: "2",
                title: "Add Transactions",
                desc: "Quickly record income and expenses, with categories and notes.",
              },
              {
                step: "3",
                title: "Visualize & Analyze",
                desc: "Use interactive charts to understand your habits and optimize savings.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-blue-50 p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Users Love Us</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                user: "Aliya",
                feedback:
                  "This app changed the way I manage my expenses. The charts helped me reduce unnecessary spending!",
              },
              {
                user: "Ravi",
                feedback:
                  "Very clean dashboard and super easy to track my income and bills. Highly recommended.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-left">
                <p className="text-gray-700 mb-4">“{t.feedback}”</p>
                <div className="text-sm font-semibold text-blue-600">— {t.user}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center rounded">
        <h2 className="text-4xl font-bold mb-4">Start Managing Your Money Smarter</h2>
        <p className="text-lg mb-6">Sign up now and take control of your financial future.</p>
        <Link to="/register">
          <button className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition">
            Get Started Free
          </button>
        </Link>
      </section>

      {/* Footer */}

      <footer className="text-center mt-2 text-sm py-6 bg-gray-950 text-gray-400">
        &copy; {new Date().getFullYear()} FinanceApp. Built with Nizam.
      </footer>
    </div>
  );
};

export default Home;
