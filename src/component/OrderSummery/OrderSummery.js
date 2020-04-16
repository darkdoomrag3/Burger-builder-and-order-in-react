import React from 'react'

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
            <ul>
                {summeryIngrediant}
            </ul>


        </div>
    )
}

export default OrderSummery
