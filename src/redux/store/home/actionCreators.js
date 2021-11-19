import axios from 'axios'

import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
} from './constants'
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