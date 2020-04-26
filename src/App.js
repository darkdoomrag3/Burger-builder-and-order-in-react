import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import BurgerMaker from './BurgerMaker/BagerMaker';
import ToolBar from './component/ToolBar/ToolBar';
import SideDrawer from './component/SideDrawer/SideDrawer';


class App extends React.Component {
  
  state = {
    sideDrawerOpen: false,
  }

  colseDrawerHandler=()=>{
    this.setState(prevstate=>{
      return {sideDrawerOpen : !prevstate.sideDrawerOpen}
    })
  }
  
  render() {
    return (
      <div>
       <ToolBar/>
      <SideDrawer closed={this.colseDrawerHandler}/>
      
        <BurgerMaker/>
    
      </div>
    );
  }
}

export default App;


///// 8 12
