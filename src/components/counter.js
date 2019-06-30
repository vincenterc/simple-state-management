import React from 'react'
import useGlobal from '../store'

const Counter = () => {
  const [globalState, globalActions] = useGlobal()

  return (
    <div>
      <p>counter: {globalState.counter}</p>
      <button onClick={() => globalActions.addToCounter(1)}>+1</button>
    </div>
  )
}

export default Counter
