import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
// import CSSTransitionCpn from './react-transition-group/CSSTransition/App'
// import SwitchTransitionCpn from './react-transition-group/SwitchTransition/App'
// import TransitionGroupCpn from './react-transition-group/TransitionGroup/App'
// import ReduxCpn from './redux/App'
import ReactRouterCpn from './react-router/App'
import './react-transition-group/Transition.css'
import Expenses from './react-router/routes/expenses'
import Invoices from './react-router/routes/invoices'
import Invoice from './react-router/routes/invoice'

function App() {
  return (
    <BrowserRouter>
      {/* <CSSTransitionCpn /> */}
      {/* <SwitchTransitionCpn /> */}
      {/* <TransitionGroupCpn /> */}
      <Routes>
        <Route path="/" element={<ReactRouterCpn />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
