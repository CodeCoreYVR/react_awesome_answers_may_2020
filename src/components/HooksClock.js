import React, { useState, useEffect } from 'react'

export default function HooksClock() {
  const [time, setTime] = useState(new Date());
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTicker((state) => {
        return state + 1;
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setTime(new Date());
  }, [ticker]);

  return(
    <div>
      {time.toLocaleTimeString()}
    </div>
  )
}
