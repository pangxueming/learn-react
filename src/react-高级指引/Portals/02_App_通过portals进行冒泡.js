import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  render() {
    return (
      ReactDOM.createPortal(this.props.children, this.el)
    )
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  )
}

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  render() {
    const { count } = this.state;
    return (
      <div onClick={() => this.handleChange()}>
        <p>点击次数{count}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }

  handleChange() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
