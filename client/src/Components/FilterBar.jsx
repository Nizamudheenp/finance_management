const FilterBar = ({ filters, setFilters, onSearch }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row gap-3">
      <input
        type="text"
        name="category"
        placeholder="Filter by category"
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="border p-2 rounded flex-1"
      />
      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        className="border p-2 rounded"
      />
      <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default FilterBar;
