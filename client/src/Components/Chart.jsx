import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ income, expense }) => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ['#4ade80', '#f87171'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'left', 
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
<div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h2 className="text-lg font-semibold text-center mb-4">Income vs Expense</h2>
      <div className="h-[180px] flex justify-center">
        <Doughnut data={data} options={options}/>
      </div>
      
    </div>
  );
};

export default Chart;
