import React from 'react';
import './burgercontrol.css';


const BurgerControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='More'>More</button>
            <button className='Less'>Less</button>
        </div>
    )
}

export default BurgerControl
