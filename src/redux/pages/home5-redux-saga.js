import React, { PureComponent } from 'react'
import { Button } from 'antd'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import {
  increment,
  addAction
} from '../store/counter/actionCreators'
import {
  fetchHomeMultiDataAction
} from '../store/home/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    this.props.fetchHomeMutilData()
  }

  render() {
    return (
      <div>
        <h1>Home5</h1>
        <h2>当前计数:{this.props.counter}</h2>
        <Button onClick={e => this.props.increment()}>+1</Button>
        <Button onClick={e => this.props.addAction(5)}>+5</Button>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
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
    fetchHomeMutilData() {
      dispatch(fetchHomeMultiDataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)