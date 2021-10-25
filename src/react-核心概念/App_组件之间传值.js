import './App.css';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.author.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.author.date)}
      </div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar className="Avatar" user={props.user.author} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
      className="img"
    />
  )
}

function formatDate(date) {
  return (
    <div>
      <span className="time">
        {date.toLocaleDateString()}
      </span>
      &nbsp;&nbsp;&nbsp;
      <span>
        {date.toLocaleTimeString()}
      </span>
    </div>
  );
}

function App() {
  let date = new Date();
  date.toLocaleTimeString()
  const info = {
    name: "pangxueming",
    author: {
      name: '中润',
      avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F902397dda144ad340400bfbcd3a20cf431ad8549.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637309015&t=25566762f1108cc1a73e6ea50d8affc2'
    },
    date,
    text: "测试内容"
  }
  return (
    <div className="App">
      <Comment author={info} />
    </div>
  );
}

export default App;
