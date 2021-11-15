import React from 'react'
import { Button } from 'antd'

import {
  decrement,
  subAction
} from '../store/actionCreators';
import { connect } from '../utils/connect';

function About(props) {
  return (
    <div>
      <h1>About2</h1>
      <h2>当前计数:{props.counter}</h2>
      <Button onClick={e => props.decrement()}>-1</Button>
      <Button onClick={e => props.subNumber(5)}>-5</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => {
  return {
    decrement() {
      dispatch(decrement())
    },
    subNumber(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)