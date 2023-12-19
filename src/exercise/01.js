// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// better to create a separate function because can forward dispatch as props

// The 1st argument is called "state" - the current value of count
// The 2nd argument is called "newState" - the value passed to setCount
function countReducer(state, newState) {
  return newState;
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
