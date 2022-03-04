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
       <div > <div className='timeco'>
       <span>{hours}</span>h <span>{minutes}
        </span>m <span>{seconds}</span>s <span> left</span>
         </div></div>
        <button className='btn' style={{color:"#5539a8",fontWeight:"500"}}>Place a bid</button>
      </div>
    </div>
  );
}

export default Timer;