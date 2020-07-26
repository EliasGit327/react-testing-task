import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import HeaderCmp from "./components/HeaderCmp";
import FirstVarCmp from "./components/FirstVarCmp";

const App = () => {
  return (
    <>
      <header>
        <HeaderCmp/>
      </header>
      <body>
        {/*<MainPage/>*/}
        <FirstVarCmp/>
      </body>
    </>
  );
}

export default App;
