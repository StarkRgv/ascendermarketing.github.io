import { useState, useEffect } from "react";

const useStatsCounter = (end, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // let start = 0;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return end;
        }
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default useStatsCounter;
