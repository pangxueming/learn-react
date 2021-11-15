import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
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

// 推荐和轮播图的action
export const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNERS,
    banners
  }
}

export const changeRecommendAction = (recommends) => {
  return {
    type: CHANGE_RECOMMENDS,
    recommends
  }
}