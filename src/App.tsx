import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './component/Person';
import { Countries, UserProvider } from './component/UserContextProvider';
import UseStateAndUseEffectHooks from './component/UseStateAndUseEffectHooks';
import UseMemoHook from './component/UseMemoHook';
import UseCallbackHook from './component/UseCallbackHook';
import Dashboard from './hooks/Dashboard';
import { User } from './hooks/User';
import { DashboardContext } from './hooks/context';
import UseRefHook from './component/UseRefHook';
import UseReducerHook from './component/UseReducerHook';
import UseImperativeHook from './component/UseImperativeHook';
import UseTransitionHook from './component/UseTransitionHook';
import UseDefferedValueHook from './component/useDefferedValueHook';

function App() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You'
  });
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //   </header>
    // </div>
    <>
      <UseDefferedValueHook />
      <UserProvider>
        <Person name={"Pedro"} email={"em@em.com"} age={22} isMarried={false} country={Countries.NIGERIA} />
        <Person name={"Elvis"} email={"em@em.com"} age={22} isMarried={true} country={Countries.BRAZIL} />
      </UserProvider>
      <UseStateAndUseEffectHooks />
      <UseMemoHook />
      <UseCallbackHook />
      {/* Pass around the user without passing through as props */}
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
      <UseRefHook />
      <UseReducerHook />
      <UseImperativeHook />
      <UseTransitionHook />
    </>
  );
}

export default App;
