import React, { PureComponent } from 'react'
import { Button } from 'antd'
import axios from 'axios'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import {
  increment,
  addAction,
  changeBannerAction,
  changeRecommendAction
} from '../store/actionCreators'

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data;
      console.log(this.props);
      console.log(data.banner.list);
      this.props.getBanners(data.banner.list);
      this.props.getRecommends(data.recommend.list);
    })
  }
  render() {
    return (
      <div>
        <h1>Home3</h1>
        <h2>当前计数:{this.props.counter}</h2>
        <Button onClick={e => this.props.increment()}>+1</Button>
        <Button onClick={e => this.props.addAction(5)}>+5</Button>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(increment());
    },
    addAction(num) {
      dispatch(addAction(num));
    },
    getBanners(banners) {
      dispatch(changeBannerAction(banners))
    },
    getRecommends(recommends) {
      dispatch(changeRecommendAction(recommends))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)