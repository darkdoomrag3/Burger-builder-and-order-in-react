import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const OrderSummery = (props) => {
    const summeryIngrediant = Object.keys(props.ingrediant)
        .map(

            igKey => {
                return (
                    <li>
                        <span style={{ textTransform: 'capitalize' }}> {igKey} </span> : {props.ingrediant[igKey]}
                    </li>
                )
            }
        )


    return (
        <div>
            <p>Your order List</p>
            <ul>
                {summeryIngrediant}
            </ul>

            <p>Total price : {props.price}</p>

            <CustomButton cliked={props.purchaseContinueHandler}>Continue</CustomButton>
            <CustomButton inverted cliked={props.purchasingCanceledHandler}>Cancel</CustomButton>

        </div>
    )
}

export default OrderSummery;
