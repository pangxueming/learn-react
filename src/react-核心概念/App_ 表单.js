import React from 'react';
import './App.css';


class NameForm extends React.Component {

  //   受控组件
  //   在 HTML 中，表单元素（如 < input >、 <textarea> 和 <select>）之类的表单元素通常自己维护 state，
  //   并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
  //   我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  handleSubmit(event) {
    console.log('提交的名字:' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
          <input type="submit" value="提交" />
        </label>
      </form>
    )
  }

}

function App() {
  return (
    <NameForm />
  )
}

export default App;
