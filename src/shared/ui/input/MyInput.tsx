import React from "react";
import styled from "styled-components"
import {MyInputProps} from "../../interfaces/interfaces";

const MyInputStyled = styled.input`
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
    border: 2px solid dimgray;
    border-radius: 5px;
`

const MyInput:React.FC<MyInputProps> = React.forwardRef<HTMLInputElement, MyInputProps>((props,ref) => {
    return (
        <MyInputStyled ref={ref} {...props}/>
    )
})

MyInput.displayName = 'MyInput'

export default MyInput;