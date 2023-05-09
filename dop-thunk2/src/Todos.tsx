import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {Button} from "./components/Button";
import {useDispatch} from "react-redux";
import {addTaskAC, addTasksTC, getTasksTC} from "./reducers/TasksReducer";
import {TasksSelectors} from "./reducers/Selectors";


type PropsType = {
    todolistId: string
    title: string
    filter: string
}

export const Todos: React.FC<PropsType> = (props) => {
    const {todolistId, title, filter} = props
    const dispatch = useAppDispatch()

    // let tasks = useAppSelector(state => state.tasks[todolistId])
    let tasks = useAppSelector(TasksSelectors)

    const tasksBlock = tasks[todolistId]?.map(el => {
        return (
            <li key={el.id}><input type='checkbox' checked={el.status}/> <span>{el.title}</span></li>
        )
    })

    const addTaskHandler = () => {
        dispatch(addTasksTC(todolistId, 'new task'))
        // dispatch(addTaskAC(todolistId))
    }

    // useEffect(() => {
    //     dispatch(getTasksTC(todolistId))
    // }, [])

    return (
        <div style={{padding: '10px'}}>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'} callBack={addTaskHandler}/>
                {/*<button>+</button>*/}
            </div>
            <ul>
                {tasksBlock}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    );
};

