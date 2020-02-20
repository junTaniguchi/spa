import React from 'react';
import Home from './components/Home';
import MenuBar from './components/MenuBar';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MenuBar/>
      <Home/>
    </div>
  );
}

export default App;
