import MyAns from "./MyAns.jsx";
import MyInput from "./MyInput.jsx";
import {useState} from "react";
import MyButton from "./MyButton.jsx";

const MyForm = () => {

    const [value, setValue] = useState({title: '',body: ''})

    const [valueHui, setValueHui] = useState('')

    const valueMath = (e) => {
        e.preventDefault()
        const num = parseInt(value.body)
        if (isNaN(num)) {
            alert("Введите корректное число")
            return
        }

        const newValueHui = value.title.split('').map((i) => i.charCodeAt(0) + num)

        setValueHui(String.fromCharCode(...newValueHui))
    }

    return (
        <div>
            <h1>Project Unicode</h1>
            <form>
                <MyInput
                    placeholder='Code'
                    value={value.title}
                    onChange={e => setValue({...value, title: e.target.value})}
                />
                <MyInput
                    placeholder='Num'
                    type="number"
                    value={value.body}
                    onChange={e => setValue({...value, body: e.target.value})}
                />
                <MyButton onClick={valueMath}>Confirm</MyButton>
                <MyAns title={valueHui}/>
            </form>
        </div>
    );
};

export default MyForm;