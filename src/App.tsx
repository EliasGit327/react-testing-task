import React from 'react';
import './App.css';
import HeaderCmp from "./components/HeaderCmp";
import { Provider } from 'react-redux';
import { GameStore } from './stores/GameStore';
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Provider store={GameStore}>
        <HeaderCmp/>
        <MainPage/>
        {/*<FirstVarCmp/>*/}
      </Provider>
    </>
  );
}

export default App;
