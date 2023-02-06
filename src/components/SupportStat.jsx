import React, { useEffect, useState } from 'react'

const SupportStat = ({ end, text, place }) => {
  const [counter, setCounter] = useState(0);
  const lastNum = end;
  const duration = 500;

  useEffect(() => {
    let interval = null;
    if (counter !== lastNum) {
      interval = setInterval(() => {
        setCounter(c => c + 1);
      }, duration / (lastNum - counter));
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter, lastNum, duration]);

  return (
    <div className="flex flex-col items-center">
      <span className={`${place === 'aboutStat' ? "aboutStat" : "stats"} font-bold sm:text-4xl`}>{counter}</span>
      <p className="mt-5 font-semibold text-lg">{text}</p>
    </div>
  );
};

export default SupportStat