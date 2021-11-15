import React, { PureComponent } from 'react'

import Home from './pages/home2'
import About from './pages/about2'

import { StoreContext } from './utils/context'
import store from './store'

export default class App extends PureComponent {

  render() {
    return (
      <StoreContext.Provider value={store}>
        <Home />
        <hr />
        <About />
      </StoreContext.Provider>
    )
  }
}
