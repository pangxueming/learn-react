// import { Button } from 'antd';
import React, {/* useState,*/ createContext } from 'react'
// import CounterCpn from './01_初体验hooks/counter-hook'
// import CounterCpn from './02_useState的使用/复杂状态的修改'
// import CounterCpn from './03_useEffect的使用/01_class实现title的修改'
// import EffectHookCancelSubscribeCpn from './03_useEffect的使用/03_useEfect模拟订阅和取消订阅'
// import MultiEffectHook from './03_useEffect的使用/04_多useEffect一起使用'
// import ContextHookDemo from './04_useContext使用/01_useContext的使用'
// import HomeReducerCpn from './05_useRedecuer使用/home'
// import ProfileReducerCpn from './05_useRedecuer使用/profile'
// import CallHookDemo from './06_useCallback使用/01_useCallback不能进行的性能优化'
// import CallbackHookDemo from './06_useCallback使用/02_useCallback进行性能优化'
// import UseMemoHookDemo from './07_useMemo使用/01_useMemo复杂计算的应用'
// import UseMemoHookDemo2 from './07_useMemo使用/02_useMemo传入子组件应用类型'
// import UseRefHookDemo1 from './08_useRef使用/01_useRef引用DOM'
// import UseRefHookDemo2 from './08_useRef使用/02_useRef引用其他数据'
// import ForwardRefHookDemo from './09_useImperativeHandle/01_回顾forwardRef的使用'
// import UseImperativeHandleHookDemo from './09_useImperativeHandle使用/02_ useImperativeHandle用法'
// import UseEffectCounterDemo from './10_useLayoutEffect使用/01_useEffect的counter修改'
// import UseLayoutEffectCounterDemo from './10_useLayoutEffect使用/02_useLayoutEffect的counter修改'
// import CustomContextShareDemo from './11_自定义hook/01_认识自定义hook'
// import CustomContextShareDemo from './11_自定义hook/02_自定义hook练习-context共享'
// import CustomScrollPositionHook from './11_自定义hook/03_自定义hook练习-获取滚动位置'
import CustomDataStorageHookDemo from './11_自定义hook/04_自定义hook练习-localstorage存储'

export const UserContext = createContext();
export const ThemeContext = createContext();
export const TokenContext = createContext();

function App() {
  // const [show, setShow] = useState(true);
  return (
    // <div>
    //   App
    //   <Button onClick={e => setShow(!show)}>切换</Button>
    //   {show && <MultiEffectHook />}
    // </div>
    <div>
      {/* <ThemeContext.Provider value={{ color: 'red' }}>
        <UserContext.Provider value={{ name: 'zhangsan' }}>
          <ContextHookDemo />
        </UserContext.Provider>
      </ThemeContext.Provider> */}
      {/* <HomeReducerCpn />
      <ProfileReducerCpn /> */}
      {/* {
        show && <CustomLifeHookDemo />
      } */}

      {/* 自定义hook context共享 */}
      {/* <UserContext.Provider value={{ name: 'zhangsan', age: 18 }}>
        <TokenContext.Provider value={{ token: 'abcdefg' }}>
          <CustomContextShareDemo />
        </TokenContext.Provider>
      </UserContext.Provider> */}

      <CustomDataStorageHookDemo />

      {/* <Button onClick={e => setShow(!show)}>切换</Button> */}
    </div>
  )
}

export default App;