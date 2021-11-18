import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer';
import sage from './saga'

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 应用一些中间件
// 1.引入thunkMiddleWare中间件
// 2.创建sageMiddleWare中间件
const sageMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware, sageMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));

sageMiddleware.run(sage);

export default store