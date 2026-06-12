import { useEffect, useState } from "react";

function Timer({ submitQuiz }) {
  const [time, setTime] = useState(1320);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-white bg-success d-inline position-fixed p-2 rounded top-0 end-0 m-3">
      Time Left:
      {Math.floor(time / 60)}:
      {time % 60}
    </h2>
  );
}

export default Timer;