import React from 'react';
import BurgerIngridiants from './BurgerIngridiants/BurgerIngridiants';
import './burger.css';

const Burger = (props) => {
   
    const showIngrediant = Object.keys(props.ingrediant)
   .map(igKey=>{
    return [...Array(props.ingrediant[igKey])].map((_,i)=>{
        return <BurgerIngridiants type={igKey} key={igKey + 1} />
    }).reduce((arr,el)=>{
       return arr.concat(el)
    },[])

   })
   
   
    return (
        <div className="Burger">
            <BurgerIngridiants type="bread-top"/>
            {
                showIngrediant
            }
            <BurgerIngridiants type="bread-bottom" />
        </div>
    )
}

export default Burger;
