import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyBarChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(data),
        backgroundColor: '#f87171',
      },
    ],
  };

  return (
<div className="bg-white p-4 rounded-xl shadow w-full h-full">
  <h2 className="text-lg font-semibold text-center mb-4">Monthly Expense Trend</h2>
  <div className="h-[180px] flex justify-center">
    <Bar data={chartData} />
  </div>
</div>

  );
};

export default MonthlyBarChart;
