import React, { useEffect, useState } from 'react'
import CheckOutSummery from './CheckOutSummery'

const CheckOut = (props) => {
   
    
    const [ingrediant, setIngrediant] = useState([]);

    useEffect(() => {
        setIngrediant({ salad: 1, meat: 2 })
    },[])

   
    return (
        <div>
            
            <CheckOutSummery ingrediant={ingrediant}/>

        </div>
    )
}

 export default CheckOut

