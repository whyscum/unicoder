import React from "react";
import {MyInputProps} from "../../interfaces/interfaces";
import {MyInputStyled} from "../../styled/styled-components";

const Input: React.FC<MyInputProps> = React.forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    return (
        <MyInputStyled ref={ref} {...props}/>
    )
})

Input.displayName = 'MyInput'

export default Input;