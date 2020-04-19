import React from 'react'
import './navigation.css'
import  Button from './Navigation.style';

const Navigation = (props) => {
    return (
        <li className='Navigation'>
       <Button as="a" href="/">{props.children}</Button>

    </li>
    )
}

export default Navigation;
