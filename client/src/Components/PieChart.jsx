import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ transactions, type = 'expense' }) => {
    const filtered = transactions.filter((t) => t.type === type);

    const categoryTotals = filtered.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                data: Object.values(categoryTotals),
                backgroundColor: [
                    '#4ade80', '#60a5fa', '#facc15', '#f87171', '#c084fc', '#fdba74'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow w-full h-full">
            <h2 className="text-lg font-semibold text-center mb-4">
                {type === 'expense' ? 'Expenses by Category' : 'Income by Category'}
            </h2>
             <div className="h-[180px] flex justify-center">
                 {Object.keys(categoryTotals).length > 0 ? (
                <Pie data={data} />
            ) : (
                <p className="text-gray-500 text-center">No {type} data to display</p>
            )}
             </div>
           
        </div>
    );
};

export default PieChart;
