import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn'; //时间格式 显示中文格式
import 'antd/dist/antd.less';

ReactDOM.render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>, document.getElementById('app-root'));
