import MyInput from "../shared/ui/input/MyInput";
import {useState, useCallback, FC} from "react";
import MyButton from "../shared/ui/button/MyButton";
import styled from "styled-components"
import React from "react";
import {MyFormProps} from "../shared/interfaces/interfaces";

const MyFormStyled = styled.div `
    width: 350px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyForm: FC<MyFormProps> = ({create}) => {

    const [value, setValue] = useState({title: '',body: ''})

    const handleMath = useCallback((e:any) => {
        e.preventDefault()

        const num = parseInt(value.body)
        if (isNaN(num)) {
            alert("Введите корректное число")
            return
        }

        const newValue = value.title.split('').map((i) => i.charCodeAt(0) + num)

        const ans = (String.fromCharCode(...newValue))

        const newPost = {
            ...value, ans, id: Date.now()
        }
        create(newPost)
        setValue({title: '',body: ''})
    }, [value])

    return (
        <MyFormStyled>
            <h1>Project Unicode</h1>
            <form>
                <MyInput
                    placeholder='Code'
                    value={value.title}
                    onChange={e => setValue({...value, title: e.target.value})}
                    maxLength={20}
                />
                <MyInput
                    placeholder='Num'
                    type="number"
                    value={value.body}
                    onChange={e => setValue({...value, body: e.target.value})}
                />
                <MyButton onClick={handleMath}>Confirm</MyButton>
            </form>
        </MyFormStyled>
    )
}

export default MyForm;