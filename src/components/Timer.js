import React from 'react';
import { useTime } from 'react-timer-hook';

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm} left</span>
        <button className='btn'>Place a bid</button>
      </div>
    </div>
  );
}

export default Timer;