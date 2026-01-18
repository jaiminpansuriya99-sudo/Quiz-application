function Score({ score, total, highScore }) {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-2">Your Score: <span className="font-semibold">{score} / {total}</span></p>
      <p className="text-lg font-semibold text-green-600">High Score: {highScore}</p>
      <p className="mt-4 text-gray-600">Refresh page to try again!</p>
    </div>
  );
}

export default Score;
