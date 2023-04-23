import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      clearTimeout(timer);
      if (isBreak) {
        setTimeLeft(1500);
        setIsBreak(false);
      } else {
        setTimeLeft(300); 
        setIsBreak(true);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, timeLeft, isBreak]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(1500);
    setIsBreak(false);
  };

  return (
    <div>
      <h2 data-testid="timer-label">{isBreak ? 'Break Timer' : 'Pomodro Timer'}</h2>
      <div data-testid="time-left">
        {formattedMinutes}:{formattedSeconds}
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <p>Don't Refresh Website when timer is on</p>
    </div>
  );
};

export default Timer;
