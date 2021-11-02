import React, { PureComponent } from 'react'

class App extends PureComponent {

  render() {
    return (
      <div>
        <h2>app：{this.props.name}</h2>
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  NewComponent.displayName = "Kobe";

  return NewComponent;
}

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }

  NewComponent.displayName = "Bryant";

  return NewComponent;
}

const EnhanceApp = enhanceComponent2(App);

export default EnhanceApp;