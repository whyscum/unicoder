import React from "react";
// import {MyInputProps} from "../../interfaces/interfaces";
import {MyInputStyled} from "../../styled/styled-components";

const Input: (props: any, ref: any) => React.JSX.Element =((props: any , ref: any) => {
    return (
        <MyInputStyled ref={ref} {...props}/>
    )
})

export default Input;