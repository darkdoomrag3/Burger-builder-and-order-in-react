import React from 'react';
import './modal.css';


const Modal = (props) => {
    return (
        <div className='Modal' style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100hv)',
            opacity: props.show ? '1' : '0'
        }} >
            {props.children}
        </div>
    )
}

export default Modal
