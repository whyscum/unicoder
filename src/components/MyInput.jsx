import React from "react";

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} {...props}/>
    )
})

export default MyInput;