function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 h-4 rounded mb-4">
      <div
        className="bg-green-500 h-4 rounded transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
