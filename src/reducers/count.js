import { INCREAMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}
