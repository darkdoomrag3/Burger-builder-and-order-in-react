import React from 'react';
import Burger from '../component/Burger/Burger';
import BurgerControls from '../component/BurgerControls/BurgerControls';
import OrderSummery from '../component/OrderSummery/OrderSummery';
import Modal from '../component/UI/Modal/Modal';
import axios from '../axios-order';
import Spinner from '../component/UI/Spinner/Spinner';


const INGREDIANT_PRICE = {
    salad: 5,
    meat: 8,
    bacon: 3,
    cheese: 2
}

class BagerMaker extends React.Component {

    state = {
        ingrediant: null,
        totalprice: 5,
        purchased: false,
        purchasing: false,
        loading: false

    }

    componentDidMount() {
        axios.get('https://burger-bulder-638c4.firebaseio.com/ingrediant.json')
            .then(response => {
                this.setState({ ingrediant: response.data })
            }).catch(error => { })
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

    purchasingCancelHandler = () => {
        this.setState({ purchasing: false })

    }

    purchaseContinue = () => {

        this.setState({ loading: true })
        const order = {
            ingrediant: this.state.ingrediant,
            price: this.state.totlaprice,
            customer: {
                zipCode: '41281',
                country: 'Canada',
                name: 'Emad'
            },
            email: 'test@test.com'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
            }).catch(error => this.setState({ loading: false, purchasing: false }))

    }



    render() {

        let orderSummery = null;
        let burger = <Spinner />

        if(this.state.ingrediant){


         burger = (
            <>
                <Burger ingrediant={this.state.ingrediant} />
                <BurgerControls
                    addIngrediant={this.addIngrediant}
                    removeIngrediant={this.removeIngrediant}
                    price={this.state.totalprice}
                    ordered={this.purchasingHandler}

                />


            </>
        )
        orderSummery = <OrderSummery ingrediant={this.state.ingrediant} price={this.state.totalprice}
            purchasingCanceledHandler={this.purchasingCancelHandler}
            purchaseContinueHandler={this.purchaseContinue}

        />
        if (this.state.loading) {
            orderSummery = <Spinner />

        }

    }
        

      
        return (
            <div>

                <Modal show={this.state.purchasing} modalCanceld={this.purchasingCancelHandler} >
                    {orderSummery}

                </Modal>

                {burger}

            </div>
        )
    }
}

export default BagerMaker;
