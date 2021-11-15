import React, { PureComponent } from 'react'

import Home from './pages/home3'
import About from './pages/about3'

// import { StoreContext } from './utils/context'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <Home />
        <hr />
        <About />
      </Provider>
    )
  }
}
