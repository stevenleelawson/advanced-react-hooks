// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// better to create a separate function because can forward dispatch as props

// The 1st argument is called "state" - the current value of count
// The 2nd argument is called "newState" - the value passed to setCount ie ACTION
// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action)
// })

function countReducer(state, action) {
  console.log('de', action)
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + action.step }
    }
    case 'DECREMENT': {
      return { count: state.count - action.step }
    }
    default: {
      throw new Error(`unsupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 3}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  console.log('country', state)
  // const {count} = state
  const increment = () => dispatch({type: 'DECREMENT', step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
