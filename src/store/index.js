import { createSlice, configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'

const initialCounterState = {
  counter: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const initialAuthState = {
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       }

//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       }

//     case 'increase':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       }

//     case 'toggle':
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       }

//     default:
//       return state
//   }
// }

// const store = createStore(counterReducer)

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store
