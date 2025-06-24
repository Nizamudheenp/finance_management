import { FaTrash, FaEdit } from 'react-icons/fa';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  if (transactions.length === 0) {
    return <p className="text-center text-gray-500">No transactions found.</p>;
  }

  return (
    <div className="mt-4">
      {transactions.map((t) => (
        <div
          key={t._id}
          className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600">
              ₹{t.amount} • {t.category} • {new Date(t.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded text-white text-sm ${
                t.type === 'income' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {t.type}
            </span>
            <button
              onClick={() => onEdit(t)}
              className="text-blue-500 hover:text-blue-700"
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(t._id)}
              className="text-red-500 hover:text-red-700"
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
