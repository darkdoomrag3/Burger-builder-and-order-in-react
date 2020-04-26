import React from 'react';
import './sidedrawer.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';


const SideDrawer = (props) => {
    return (
        <div className='sidedrawer' >
            <Logo height="11%"/>

            <nav>
            <NavigationItems/>

            </nav>


        </div>
    )
}

export default SideDrawer
