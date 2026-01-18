function CategorySelect({ onSelect }) {
  const categories = [
    { id: "gk", name: "General Knowledge", icon: "🧠" },
    { id: "programming", name: "Programming", icon: "💻" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "geography", name: "Geography", icon: "🌍" },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Choose Quiz Category</h1>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => onSelect(cat.id)}
          >
            <span className="category-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelect;
