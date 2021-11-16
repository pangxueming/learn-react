import React from 'react'
import { Button } from 'antd'


// import { connect } from '../utils/connect';
import { connect } from 'react-redux'

import {
  decrement,
  subAction
} from '../store/actionCreators';

function About(props) {
  return (
    <div>
      <h1>About3</h1>
      <h2>当前计数:{props.counter}</h2>
      <Button onClick={e => props.decrement()}>-1</Button>
      <Button onClick={e => props.subNumber(5)}>-5</Button>
      <h2>banner</h2>
      {props.banners && <ul>
        {
          props.banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>}
      <h2>recommend</h2>
      {props.recommends && <ul>
        {
          props.recommends.map((item) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>}
    </div>
  )
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
    decrement() {
      dispatch(decrement())
    },
    subNumber(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)