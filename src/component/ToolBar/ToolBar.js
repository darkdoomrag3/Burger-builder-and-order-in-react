import React from 'react';
import './toolbar.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';


const ToolBar = (props) => {
    return (
        <header className='Toolbar'>
        <div>Menu</div>
       
        <Logo height="80%" />
      
        
        
        <nav className='DesktopOnly'>
    <NavigationItems/>

        </nav>

    </header>

    )
}

export default ToolBar
