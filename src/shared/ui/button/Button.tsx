import * as React from "react"
import {MyButtonProps} from "../../interfaces/interfaces";
import {MyButtonStyled} from "../../styled/styled-components";

const Button: React.FC<MyButtonProps> = props  => {

    const {children, ...rest} = props

    return (
        <MyButtonStyled {...rest}>
            {children}
        </MyButtonStyled>
    )
}

export default Button;