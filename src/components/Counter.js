import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store'
import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>
          increment
        </button>
        <button onClick={() => dispatch(counterActions.increase(10))}>
          increase by 10
        </button>
        <button onClick={() => dispatch(counterActions.decrement())}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
