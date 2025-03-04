import React, {FC} from "react";
import styled from "styled-components";
import {MyModalProps} from "../../interfaces/interfaces";

const MyModalStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background: rgba(0,0,0,0.5);
`

const MyModalStyledActive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
`

const MyModalStyledContent = styled.div`
    padding: 25px;
    background-color: white;
    border-radius: 20px;
    min-width: 250px;
`

const MyModal: FC<MyModalProps> = ({children, visible, setVisible}) => {

    if(visible){
        return (
            <MyModalStyledActive onClick={() => setVisible(false)}>
                <MyModalStyledContent onClick={(e) => e.stopPropagation()}>
                    {children}
                </MyModalStyledContent>
            </MyModalStyledActive>
        )}
        return(
            <MyModalStyled onClick={() => setVisible(false)}>
                <MyModalStyledContent onClick={(e) => e.stopPropagation()}>
                    {children}
                </MyModalStyledContent>
            </MyModalStyled>)
}

export default MyModal;