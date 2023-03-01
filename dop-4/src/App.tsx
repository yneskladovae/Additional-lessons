import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodoList} from "./components/SuperTodoList";

function App() {
    const tasks = [
        {id:1, title: "HTML", isDone: false},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JS", isDone: true},
    ]
    return (
        <div>
            <SuperButton callBack={() => {}} color={"red"}>Red Supper Button</SuperButton>
            <SuperButton callBack={() => {}} color={"secondary"}>Without color</SuperButton>
            <SuperButton callBack={() => {}} disabled>Red Supper Button</SuperButton>

            <SuperTodoList tasks={tasks}>
                <SuperButton callBack={() => {}} color={"red"}>Red Supper Button</SuperButton>
                <SuperButton callBack={() => {}} color={"secondary"}>Without color</SuperButton>
                <SuperButton callBack={() => {}} disabled>Red Supper Button</SuperButton>
            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <SuperButton callBack={() => {}} color={"red"}>Red Supper Button</SuperButton>
                <SuperButton callBack={() => {}} color={"secondary"}>Without color</SuperButton>
                <div>Info</div>
                <div>Info</div>
            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
            </SuperTodoList>
        </div>
    );
}

export default App;
