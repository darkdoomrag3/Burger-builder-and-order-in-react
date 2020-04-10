import React from 'react'
import BurgerIngridiants from './BurgerIngridiants/BurgerIngridiants'
import './burger.css'

const Burger = (props) => {
    return (
        <div className="Burger">
            <BurgerIngridiants type="bread-top"/>
            <BurgerIngridiants type="meat"/>
            <BurgerIngridiants  type ="salad"/>
            <BurgerIngridiants type="bread-bottom" />
        </div>
    )
}

export default Burger
