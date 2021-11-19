import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants';
// 拆分homeReducer
const initMultidataState = {
  banners: [],
  recommends: []
}
function homeReducer(state = initMultidataState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default homeReducer;