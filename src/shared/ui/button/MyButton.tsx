import * as React from "react"
import styled from "styled-components"
import {MyButtonProps} from "../../interfaces/interfaces";

const MyButtonStyled = styled.button`
    padding: 5px 15px;
    color: dimgray;
    font-size: 14px;
    background: transparent;
    border: 2px solid dimgray;
    border-radius: 5px;
`

const MyButton:React.FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <MyButtonStyled {...props}>
            {children}
        </MyButtonStyled>
    )
}

export default MyButton;