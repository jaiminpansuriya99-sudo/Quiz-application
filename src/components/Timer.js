import { useEffect } from "react";

function Timer({ seconds, setSeconds, onTimeUp }) {
  useEffect(() => {
    if (seconds <= 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, setSeconds, onTimeUp]);

  return (
    <div className="text-right text-sm font-semibold mb-2">
      Time Left: {seconds}s
    </div>
  );
}

export default Timer;
