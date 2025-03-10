import styled from "styled-components";
import {createGlobalStyle} from "styled-components"

export const Global = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
        font-family: consolas, serif;
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }

    :root {
        display: flex;
        justify-content: center;
    }
`

export const MyFormStyled = styled.div`
    width: 350px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PostStyled = styled.div`
    display: flex;
    padding: 15px;
    border: 2px solid dimgray;
    border-radius: 5px;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
`

export const HrStyled = styled.hr`
    margin: 20px 0;
    padding: 0;
    height: 10px;
    border: none;
    border-top: 1px solid #333;
    box-shadow: 0 10px 10px -10px #8c8b8b inset;
`

export const MyButtonStyled = styled.button`
    padding: 5px 15px;
    color: dimgray;
    font-size: 14px;
    background: transparent;
    border: 2px solid dimgray;
    border-radius: 5px;
    box-shadow: 0 1px 0 gray;
    transition: 0.5s;
    &:hover {
        transform: translate(0,-1px);
        box-shadow: 0 10px 10px 0 rgba(64, 64, 64, 0.8);
    }
`

export const MyInputStyled = styled.input`
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
    border: 2px solid dimgray;
    border-radius: 5px;
    
`

export const AppStyled = styled.div`
    width: 800px;
`

