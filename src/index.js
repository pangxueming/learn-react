import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn'; //时间格式 显示中文格式
import 'antd/dist/antd.less';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>, document.getElementById('app-root'));
