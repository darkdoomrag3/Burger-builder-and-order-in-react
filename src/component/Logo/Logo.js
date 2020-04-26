import React from 'react'
import burgerLogo from '../../assest/1.png'
import './logo.css'

const Logo = (props) =>
    (
        <div className='Logo' style={{height : props.height}}>
            <img src={burgerLogo} />
        </div>
    )


export default Logo;
