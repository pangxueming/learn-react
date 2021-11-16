import React from 'react'
import { Button } from 'antd'

import { connect } from '../utils/connect'

import {
  increment,
  addAction
} from '../store/actionCreators'

function Home(props) {
  return (
    <div>
      <h1>Home2</h1>
      <h2>当前计数:{props.counter}</h2>
      <Button onClick={e => props.increment()}>+1</Button>
      <Button onClick={e => props.addAction(5)}>+5</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: function () {
      dispatch(increment());
    },
    addAction: function (num) {
      dispatch(addAction(num));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)