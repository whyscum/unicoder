import {MyInputStyled} from "../../styled/styled-components";
import React from "react";
import {MyInputProps} from "../../interfaces/interfaces";

const Input = React.forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    return (
        <MyInputStyled ref={ref} {...props} />
    );
});

export default Input;