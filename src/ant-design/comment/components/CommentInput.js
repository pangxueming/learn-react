import React, { PureComponent } from 'react'
import { Button, Input } from 'antd'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  render() {
    const { comment } = this.state;

    return (
      <div>
        <Input.TextArea rows={4} cols={40} value={comment} onChange={e => this.handleChangeComment(e)} style={{ margin: '10px 0' }} />
        <Button type="primary" onClick={e => this.addComment()}>添加评论</Button>
      </div>
    )
  }

  handleChangeComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  addComment() {
    const time = Date.now();
    this.props.changeCommentList({
      id: time,
      comment: this.state.comment,
      avatar: 'https://joeschmoe.io/api/v1/random',
      nickname: 'zhangsan'
    })

    this.setState({
      comment: ''
    })
  }
}
