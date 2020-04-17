import React from 'react';
import './modal.css';
import BackDrop from '../BackDrop/BackDrop';


const Modal = (props) => {
    return (
        <>
            <BackDrop  show={props.show} clicked={props.modalCanceld} />
            <div className='Modal' style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100hv)',
                opacity: props.show ? '1' : '0'
            }} >
                {props.children}
            </div>

        </>
    )
}

export default Modal
