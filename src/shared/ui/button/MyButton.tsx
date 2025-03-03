import classes from "./MyButton.module.css"
import * as React from "react"
import {JSX} from "react";

interface MyButtonProps {
    props:React.AnchorHTMLAttributes<HTMLAnchorElement>;
    children:React.ReactNode
}

const MyButton:React.FC<MyButtonProps> = ({children, ...props}): JSX.Element => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton;