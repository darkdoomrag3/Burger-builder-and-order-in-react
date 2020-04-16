import React from 'react';
import Burger from '../component/Burger/Burger';
import BurgerControls from '../component/BurgerControls/BurgerControls';
import OrderSummery from '../component/OrderSummery/OrderSummery';
import Modal from '../component/UI/Modal/Modal';


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
        totalprice: 5,
        purchased: false,
        purchasing: false

    }


    updatedPurchase(ingrediant) {
        const sum = Object.keys(ingrediant)
            .map(ingKey => {
                return ingrediant[ingKey]
            }).reduce((sum, el) => {
                return sum + el
            }, 0)

        this.setState({
            purchased: sum > 0
        })

    }


    addIngrediant = (type) => {
        const oldCount = this.state.ingrediant[type];
        const newCount = oldCount + 1;
        const updatedIngrediant = {
            ...this.state.ingrediant
        }

        updatedIngrediant[type] = newCount;
        const additionPrice = INGREDIANT_PRICE[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice + additionPrice;
        this.setState({ totalprice: newPrice, ingrediant: updatedIngrediant })
        this.updatedPurchase(updatedIngrediant)

    }

    purchasingHandler = () => {
        this.setState({ purchasing: true })
    }


    removeIngrediant = (type) => {

        const oldCount = this.state.ingrediant[type];
        const newCount = oldCount - 1;
        const updatedIngrediant = {
            ...this.state.ingrediant
        }

        if (oldCount <= 0) {
            return;
        }

        updatedIngrediant[type] = newCount;
        const priceDiminished = INGREDIANT_PRICE[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice - priceDiminished;
        this.setState({ totalprice: newPrice, ingrediant: updatedIngrediant })
        this.updatedPurchase(updatedIngrediant)

    }


    render() {

        return (
            <div>

                <Modal show={this.state.purchasing}>
                    <OrderSummery ingrediant={this.state.ingrediant} price={this.state.totalprice} />

                </Modal>
                <Burger ingrediant={this.state.ingrediant} />
                <BurgerControls
                    addIngrediant={this.addIngrediant}
                    removeIngrediant={this.removeIngrediant}
                    price={this.state.totalprice}
                    ordered={this.purchasingHandler}

                />


            </div>
        )
    }
}

export default BagerMaker;
