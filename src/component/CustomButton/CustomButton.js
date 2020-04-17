import React from 'react'
import { CustomButtonContainer } from './CustomButton.style'

const CustomButton = ({ children , ...props }) => (

    <CustomButtonContainer onClick={props.cliked} {...props} > {children} </CustomButtonContainer>


)


export default CustomButton
