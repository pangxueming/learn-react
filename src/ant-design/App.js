import React, { PureComponent } from 'react'
import CommentInput from './comment/components/CommentInput'
import CommentItem from './comment/components/CommentItem'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }

  render() {
    const { commentList } = this.state
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        <CommentItem commentList={commentList} removeComment={(index) => this.removeComment(index)} />
        <CommentInput changeCommentList={(list) => this.changeCommentList(list)} />
      </div>
    )
  }

  changeCommentList(list) {
    const { commentList } = this.state;
    this.setState({
      commentList: [...commentList, list]
    })
  }

  removeComment(index) {
    const { commentList } = this.state;
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }

}
