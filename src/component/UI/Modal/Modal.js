import React, { useState,useEffect } from 'react';
import './modal.css';
import BackDrop from '../BackDrop/BackDrop';


const Modal = (props) => {

    const [enabel, setenabel] = useState(false);
    useEffect(() => {
        return enabel.show !== props.show || enabel.children !== props.children
    }, [enabel])


    return (
        <>
            <BackDrop show={props.show} clicked={props.modalCanceld} />
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
