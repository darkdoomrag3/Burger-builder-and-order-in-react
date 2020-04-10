import React from 'react'
import Burger from '../component/Burger/Burger'



class BagerMaker extends React.Component {

state={
    ingrediant : {
        meat : 2,
        salad : 1,
        bacon : 1,
        cheese : 2
    }
}

    render() {

        return (
            <div>
                <Burger ingrediant={this.state.ingrediant} />

            </div>
        )
    }
}

export default BagerMaker;
