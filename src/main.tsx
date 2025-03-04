import { createRoot } from 'react-dom/client'
import App from './App'
import {createGlobalStyle} from "styled-components"
import React from 'react'

const Global = createGlobalStyle`
    *{
        padding: 0;
        box-sizing: border-box;
        font-family: consolas,serif;
    }
    :root{
        display: flex;
        justify-content: center;
    }
`

createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Global />
        <App />
    </>
)
