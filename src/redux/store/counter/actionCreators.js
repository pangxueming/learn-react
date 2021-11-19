import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  ADD_NUMBER,
  SUB_NUMBER
} from './constants'

export const increment = () => {
  return {
    type: INCREMENT_NUMBER
  }
}

export const decrement = () => {
  return {
    type: DECREMENT_NUMBER
  }
}

export const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}