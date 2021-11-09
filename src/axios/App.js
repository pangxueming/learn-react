import React, { PureComponent } from 'react'

import axios from 'axios'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'zhangsan',
    //     age: 18
    //   },
    // }).then(data => {
    //   console.log(data);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'lisi',
    //     age: 19
    //   },
    //   method: 'post'
    // }).then(data => {
    //   console.log(data);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios.get('https://httpbin.org/get', {
    //   params: {
    //     name: 'zhangsan',
    //     age: 18
    //   }
    // }).then(console.log)


    // axios.post('https://httpbin.org/post', {
    //   name: 'lisi',
    //   age: 19
    // }).then(console.log)

    try {
      const result = await axios.post('https://httpbin.org/post', {
        name: 'lisi',
        age: 19
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        axios
      </div>
    )
  }
}
