import React, { PureComponent } from 'react'
import { Button, Space, DatePicker } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import HomeRecommend from 'components/home/home-cpn/home-recommend'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loadings: [],
    };
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    const { loadings } = this.state;
    return (
      <>
        <HomeRecommend />
        <Space style={{ width: '100%' }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />

          <DatePicker onChange={this.onChange} />
        </Space>
      </>
    )
  }
}
