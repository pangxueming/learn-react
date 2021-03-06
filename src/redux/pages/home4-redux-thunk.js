import React, { PureComponent } from 'react'
import { Button } from 'antd'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import {
  increment,
  addAction,
  getHomeMutilDataAction
} from '../store/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    // console.log(this.props);
    this.props.getHomeMutilData();
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Home4</h1>
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
    getHomeMutilData() {
      dispatch(getHomeMutilDataAction);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)