import React, { useState } from 'react';
import HooksClock from './HooksClock';

export default function WorldTimers() {
  const [timersArray, setTimersArray] = useState([1]);

  function updateTimersArray(bool) {
    if (bool) {
      setTimersArray((state) => {
        return [...state, (state[state.length - 1] + 1)]
      })
    } else {
      setTimersArray((state) => {
        return state.slice(0, state.length -1 );
      })
    }
  }

  return(
    <div>
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      {timersArray.map(timer => {
        return <HooksClock key={timer} />
      })}
      <button onClick={() =>  updateTimersArray(true)}>Add Clock</button>
      <button onClick={() => updateTimersArray(false)}>Remove Clock</button>
    </div>
  )
}