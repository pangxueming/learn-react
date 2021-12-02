// import { Button } from 'antd';
// import { Button } from 'antd';
import React, {/* useState, */ createContext } from 'react'
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
import UseRefHookDemo1 from './08_useRef使用/01_useRef引用DOM'

export const UserContext = createContext();
export const ThemeContext = createContext();

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

      <UseRefHookDemo1 />

      {/* <Button onClick={e => setShow(!show)}>切换</Button> */}
    </div>
  )
}

export default App;