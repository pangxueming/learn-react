import React, { PureComponent } from 'react'
import { Comment, Avatar, Tooltip } from 'antd'
import moment from 'moment'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {

  render() {
    return (
      <div>
        {
          this.props.commentList.map((item, index) => {
            return (
              <Comment
                key={item.id}
                author={<a href='/#'>{item.nickname}</a>}
                avatar={<Avatar src={item.avatar} alt="Han Solo" />}
                content={<p>{item.comment}</p>}
                datetime={
                  <Tooltip placement="top" title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>}
                actions={
                  [<span onClick={e => this.props.removeComment(index)}><DeleteOutlined />删除</span>]
                }
              />
            )
          })
        }
      </div>
    )
  }

}
