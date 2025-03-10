import {createRoot} from 'react-dom/client'
import App from './App'
import React from 'react'
import {Global} from "./shared/styled/styled-components";


createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Global/>
        <App/>
    </>
)
