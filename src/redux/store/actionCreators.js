import axios from 'axios'

import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
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

// redux-thunk定义的action函数
export const getHomeMutilDataAction = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  })
}

// redux-saga拦截的action
export const fetchHomeMultiDataAction = {
  type: FETCH_HOME_MULTIDATA
}