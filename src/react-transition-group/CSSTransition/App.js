import React, { PureComponent } from 'react'

import { Button, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { CSSTransition } from 'react-transition-group'
import { DivWrapper } from './style'
const { Meta } = Card;

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    }
  }

  render() {
    const { isShow } = this.state
    return (
      <DivWrapper>
        <Button onClick={e => { this.setState({ isShow: !isShow }) }}>点击按钮</Button>
        <CSSTransition
          in={isShow}
          timeout={200}
          classNames="card"
          unmountOnExit
          appear
          onEnter={el => console.log("onEnter")}
          onEntering={el => console.log("onEntering")}
          onEntered={el => console.log("onEntered")}
          onExit={el => console.log("onExit")}
          onExiting={el => console.log("onExiting")}
          onExited={el => console.log("onExited")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </DivWrapper >
    )
  }
}
