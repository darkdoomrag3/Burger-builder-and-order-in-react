import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import BurgerMaker from './BurgerMaker/BagerMaker';
import ToolBar from './component/ToolBar/ToolBar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import CheckOut from './component/ChechOut/CheckOut';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {

  state = {
    sideDrawerOpen: false,
  }

  colseDrawerHandler = () => {
    this.setState(prevstate => {
      return { sideDrawerOpen: !prevstate.sideDrawerOpen }
    })
  }

  render() {
    return (
      <div>
        <ToolBar />
        <SideDrawer closed={this.colseDrawerHandler} />

        <Switch>
          <Route path="" exact component={BurgerMaker} />
          <Route path="checkout" component={CheckOut} />
        </Switch>
      </div>
    );
  }
}

export default App;


///// 8 12
