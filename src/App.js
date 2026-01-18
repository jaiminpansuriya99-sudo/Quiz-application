import { useState } from "react";
import Quiz from "./components/Quiz";
import CategorySelect from "./components/CategorySelect";
import questionsData from "./data/questions";

function App() {
  const [category, setCategory] = useState(null);

  // Reset quiz (go back to category select)
  const handleBackToCategory = () => {
    setCategory(null);
  };

  return (
    <div className="app">
      {!category ? (
        <CategorySelect onSelect={setCategory} />
      ) : (
        <Quiz
          questions={questionsData[category]}
          onBack={handleBackToCategory} // optional back button
        />
      )}
    </div>
  );
}

export default App;
