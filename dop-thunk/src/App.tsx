import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppSelector} from "./hooks/hooks";
import {Todos} from "./Todos";
import {todolistAPI, TodolistType} from "./api/todolistAPI";
import {log} from "util";
import {getTodolistTC} from "./reducers/TodolistReducer";


function App() {

    let todos = useAppSelector(state => state.todos)
    //console.log(todos)


    useEffect(() => {
        // todolistAPI.getTodolists()
        //     .then((data) => console.log(data))
        getTodolistTC()
    }, [])

    return (
        <div className="App">
            {todos.map(el => {
                return (
                    <Todos
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
