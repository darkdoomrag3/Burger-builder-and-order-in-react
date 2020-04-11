import React from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/BurgerControls/BurgerControls'



class BagerMaker extends React.Component {

state={
    ingrediant : {
        meat : 3,
        salad : 1,
        bacon : 1,
        cheese : 2
    }
}

    render() {

        return (
            <div>
                <Burger ingrediant={this.state.ingrediant} />
                <BurgerControls/>


            </div>
        )
    }
}

export default BagerMaker;
