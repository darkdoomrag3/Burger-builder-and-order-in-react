import React from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/BurgerControls/BurgerControls'

const INGREDIANT_PRICE = {
    salad: 5,
    meat: 8,
    bacon: 3,
    cheese: 2
}

class BagerMaker extends React.Component {

    state = {
        ingrediant: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0
        },
        totalprice: 5

    }

    addIngrediant = (type) => {
        const oldCount = this.state.ingrediant[type];
        const newCount = oldCount + 1;
        const updatedIngrediant = {
            ...this.state.ingrediant
        }

        updatedIngrediant[type] = newCount;
        const additionPrice = INGREDIANT_PRICE;
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice + additionPrice;
        this.setState({ totalprice: newPrice, ingrediant: updatedIngrediant })

    }


    removeIngrediant=(type)=>{

        const oldCount = this.state.ingrediant[type];
        const newCount = oldCount - 1;
        const updatedIngrediant = {
            ...this.state.ingrediant
        }

        if(oldCount <=0){
            return;
        }

        updatedIngrediant[type] = newCount;
        const priceDiminished = INGREDIANT_PRICE;
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice - priceDiminished;
        this.setState({ totalprice: newPrice, ingrediant: updatedIngrediant })

    }


    render() {

        return (
            <div>
                <Burger ingrediant={this.state.ingrediant} />
                <BurgerControls
                    addIngrediant={this.addIngrediant}
                    removeIngrediant={this.removeIngrediant}


                />


            </div>
        )
    }
}

export default BagerMaker;
