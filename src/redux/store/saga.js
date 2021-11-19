import axios from 'axios';
import { /*takeEvery,*/ takeLatest, put, all } from 'redux-saga/effects'

import {
  FETCH_HOME_MULTIDATA
} from './home/constants'
import {
  changeBannerAction,
  changeRecommendAction
} from './home/actionCreators'

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;

  // yield put(changeBannerAction(banners))
  // yield put(changeRecommendAction(recommends))
  yield all(
    [yield put(changeBannerAction(banners)), yield put(changeRecommendAction(recommends))]
  )
}

function* mySage() {
  // takeEvery takeLatest区别：
  // takeLatest： 一次只能监听一个对应的action
  // takeEvery： 每一个都会被执行
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  yield all(
    [yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)]
  )
}

export default mySage;