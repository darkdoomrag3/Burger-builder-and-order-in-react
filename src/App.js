import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import BurgerMaker from './BurgerMaker/BagerMaker';
import ToolBar from './component/ToolBar/ToolBar';


class App extends React.Component {
  render() {
    return (
      <div>
       <ToolBar/>
        <BurgerMaker/>
  
      
      
      </div>
    );
  }
}

export default App;


///// 8 12
