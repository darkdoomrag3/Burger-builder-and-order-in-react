import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import './burgercontrols.css';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }

]

const BurgerControls = (props) => {
    return (
        <div className='BuildControls'>
        <p>current price : {props.price}</p>

        {controls.map(cntrl=>
            <BurgerControl key={cntrl.label} label={cntrl.label}
            added={()=>props.addIngrediant(cntrl.type)   }
            removed={()=>props.removeIngrediant(cntrl.type)}
            
            />
        )}

<button className='OrderButton' onClick={props.ordered}>Order Now</button>

        </div>
    )
}

export default BurgerControls
