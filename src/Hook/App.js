// import { Button } from 'antd';
import React, { /*useState,*/ createContext } from 'react'
// import CounterCpn from './01_初体验hooks/counter-hook'
// import CounterCpn from './02_useState的使用/复杂状态的修改'
// import CounterCpn from './03_useEffect的使用/01_class实现title的修改'
// import EffectHookCancelSubscribeCpn from './03_useEffect的使用/03_useEfect模拟订阅和取消订阅'
// import MultiEffectHook from './03_useEffect的使用/04_多useEffect一起使用'
import ContextHookDemo from './04_useContext使用/01_useContext的使用'

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
      <ThemeContext.Provider value={{ color: 'red' }}>
        <UserContext.Provider value={{ name: 'zhangsan' }}>
          <ContextHookDemo />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;