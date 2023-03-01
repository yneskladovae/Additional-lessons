import React, {useEffect, useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type DataType = {
    userId: string
    id: string
    title: string
    completed: boolean
}

function App() {
    let [data, setData] = useState<Array<DataType>>([]);
    const [value, setValue] = useState('')
    const fetchFunc = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }
    useEffect(() => {
        fetchFunc()
    }, [])

    const showTodo = () => {
        fetchFunc()
    }

    const clearTodo = () => {
        setData([])

    }
    const addTask = () => {
        let newTask:DataType = {
            userId:v1(),
            id:v1(),
            title:value,
            completed:false,
        }
        setData([newTask, ...data])
    }

    return (
        <div>
            <Button name={'Show'} callBack={showTodo}/>
            <Button name={'Clear'} callBack={clearTodo}/>
            <Input value={value} setValue={setValue}/>
            <Button name={"+"} callBack={addTask}/>
            <ul>
                {data.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.title}</span>
                            <span> <input type={"checkbox"} checked={el.completed}/> </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App;
