import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: 'increase', amount: 10 })}>
          increase by 10
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
