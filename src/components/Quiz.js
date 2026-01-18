import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import Score from "./Score";

// Import sounds
import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";

function Quiz({ questions, onBack }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [seconds, setSeconds] = useState(15);
  const [selectedOption, setSelectedOption] = useState(null);

  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );

  // Play sound
  const playSound = (isCorrect) => {
    const audio = new Audio(isCorrect ? correctSound : wrongSound);
    audio.play();
  };

  // Handle answer selection
  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].answer;
    playSound(isCorrect);

    if (isCorrect) setScore(score + 1);

    setSelectedOption(option);

    setTimeout(() => {
      nextQuestion();
      setSelectedOption(null);
    }, 500);
  };

  // Next question
  const nextQuestion = () => {
    setSeconds(15);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setShowScore(true);
  };

  // Timer run out
  const handleTimeUp = () => {
    nextQuestion();
  };

  // High score update
  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [showScore, score, highScore]);

  // Retry quiz
  const retryQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setSeconds(15);
  };

  return (
  <div className="quiz-container">
    <button className="back-btn" onClick={onBack}>← Back</button>
   {showScore ? (
  <div className="result-card">
    <div className="score-circle">
      <span className="score-main">{score}</span>
      <span className="score-total">/ {questions.length}</span>
    </div>

    <h2 className="result-title">
      {score >= 15 ? "🔥 Excellent!" : score >= 10 ? "👍 Good Job!" : "💡 Keep Practicing"}
    </h2>

    <p className="result-percent">
      {Math.round((score / questions.length) * 100)}% Accuracy
    </p>

    <div className="result-stats">
      <div>
        <h4>High Score</h4>
        <p>{highScore}</p>
      </div>
      <div>
        <h4>Total Questions</h4>
        <p>{questions.length}</p>
      </div>
    </div>

    <div className="result-actions">
      <button className="retry-btn" onClick={retryQuiz}>Retry Quiz</button>
      <button className="back-btn" onClick={onBack}>Change Category</button>
    </div>
  </div>
) : (

      <>
        <div className="quiz-header">
          {/* Timer, ProgressBar, Score */}
        </div>

        <h2 className="question">{questions[current].question}</h2>

        {/* OPTIONS BLOCK START */}
        <div className="options">
          {questions[current].options.map((opt, index) => (
            <div
              key={index}
              className={`option-card ${
                selectedOption
                  ? opt === questions[current].answer
                    ? "correct"
                    : opt === selectedOption
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(opt)}
            >
              <span className="option-label">{index + 1})</span>
              <span className="option-text">{opt}</span>
            </div>
          ))}
        </div>
        {/* OPTIONS BLOCK END */}
      </>
    )}
  </div>
);

}

export default Quiz;
