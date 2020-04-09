import React from "react";
import './App.css';

import Header from '../Header/Header';
import Aside from '../Aside/Aside';

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <Header />
        <Aside />
      </div>
    );
  }
}

export default App;