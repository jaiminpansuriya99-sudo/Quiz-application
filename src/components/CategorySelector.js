function CategorySelector({ setCategory }) {
  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      <h2 className="text-3xl font-bold">Select Quiz Category</h2>
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => setCategory("js")} 
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          JavaScript
        </button>
        <button 
          onClick={() => setCategory("python")} 
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Python
        </button>
        <button 
          onClick={() => setCategory("cpp")} 
          className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          C++
        </button>
        <button 
          onClick={() => setCategory("general")} 
          className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
        >
          General Knowledge
        </button>
      </div>
    </div>
  );
}

export default CategorySelector;
