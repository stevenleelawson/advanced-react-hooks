// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// better to create a separate function because can forward dispatch as props

// The 1st argument is called "state" - the current value of count
// The 2nd argument is called "newState" - the value passed to setCount ie ACTION
function countReducer(state, action) {
  return state + action;
}

function Counter({initialCount = 0, step = 1}) {
  // changeCount is the dispatch function
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
