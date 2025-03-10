import Input from "../shared/ui/input/Input";
import React, {FC, useCallback, useState} from "react";
import Button from "../shared/ui/button/Button";
import {MyFormProps} from "../shared/interfaces/interfaces";
import {MyFormStyled} from "../shared/styled/styled-components";

const PostForm: FC<MyFormProps> = ({create}) => {

    let [value, setValue] = useState({title: '', body: ''})

    const handleMath = useCallback((e: any) => {
        e.preventDefault()

        const newValue = value.title.split('').map((i) => i.charCodeAt(0) + parseInt(value.body))

        const ans = (String.fromCharCode(...newValue))

        if (!value.body || !value.title) return

        const newPost = {
            ...value, ans, id: Date.now()
        }
        create(newPost)
    }, [value])

    return (
        <MyFormStyled>
            <h1>Project Unicode</h1>
            <form>
                <Input
                    placeholder='Code'
                    value={value.title}
                    onChange={e => setValue({...value, title: e.target.value})}
                    maxLength={20}
                />
                <Input
                    placeholder='Num'
                    type="number"
                    value={value.body}
                    onChange={e => {setValue({...value, body: e.target.value})
                        if (value.body.length == 6)setValue({...value, body: value.body.slice(0, 6)})}}
                />
                <Button onClick={handleMath}>Confirm</Button>
            </form>
        </MyFormStyled>)
}

export default PostForm;