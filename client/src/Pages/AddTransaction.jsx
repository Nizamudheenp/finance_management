import TransactionForm from "../Components/TransactionForm";

const AddTransaction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <TransactionForm />
      </div>
    </div>
  );
};

export default AddTransaction;
