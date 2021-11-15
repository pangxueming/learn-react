import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  ADD_NUMBER,
  SUB_NUMBER
} from './constants';

const initalState = {
  counter: 0
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT_NUMBER:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state;
  }
}

export default reducer;