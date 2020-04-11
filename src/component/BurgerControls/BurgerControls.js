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

        {controls.map(cntrl=>
            <BurgerControl key={cntrl.label} label={cntrl.label} />
        )}

        </div>
    )
}

export default BurgerControls
