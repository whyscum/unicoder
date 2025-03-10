import React, {FC} from "react";
import styled from "styled-components";
import {MyModalProps} from "../../interfaces/interfaces";

const MyModalStyledActive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
`

const MyModalStyledContent = styled.div`
    padding: 25px;
    background-color: white;
    border-radius: 20px;
    min-width: 250px;
`

    const Modal: FC<MyModalProps> = ({children, visible, onClose}) => {
        if (!visible) return null

        /*useEffect(() => {
            const element = document.querySelector('#modal')
            if (element) {
                element.addEventListener('click', onClose)

            return () => {
                if (element) {
                    element.removeEventListener('click', onClose)
                }
            }
        }}, [onClose])*/

        return (
            <MyModalStyledActive id={"modal"} onClick={onClose}>
                <MyModalStyledContent onClick={(e) => e.stopPropagation()}>
                    {children}
                </MyModalStyledContent>
            </MyModalStyledActive>
        )
    }

export default Modal;