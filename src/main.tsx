import { createRoot } from 'react-dom/client'
import App from './App'
import {createGlobalStyle} from "styled-components"

const Global = createGlobalStyle`
    *{
        padding: 0;
        box-sizing: border-box;
        font-family: consolas;
    }
    #root{
        display: flex;
        justify-content: center;
    }
`

createRoot(document.getElementById('root')).render(
    <>
        <Global />
        <App />
    </>
)
