import React from 'react';
import Burger from '../Burger/Burger';
import CustomButton from '../CustomButton/CustomButton';
import './checkoutsummery.css';


const CheckOutSummery = (props) => {

  

    return (
        <div className='checkoutsummery'>
        <h1>I hope you will enjoy it</h1>
        <div style={{width : '100%' , height : '300px' , margin : 'auto'}}>

            <Burger ingrediant={props.ingrediant}/>
        </div>
             <CustomButton > continue</CustomButton>
            <CustomButton inverted >cancel </CustomButton>

    </div>
    )
}

export default CheckOutSummery;
