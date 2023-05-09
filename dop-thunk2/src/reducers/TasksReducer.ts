import {useState} from "react";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {TaskTypeAPI, todolistApi} from "../api/todolistApi";


type InitialType = {
    [key: string]: TaskTypeAPI[]
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

let initialState: InitialType = {
    ['todolistID1']: [
        // {id: v1(), title: "HTML&CSS", isDone: true},
        // {id: v1(), title: "JS", isDone: true},
        // {id: v1(), title: "ReactJS", isDone: false},
        // {id: v1(), title: "Rest API", isDone: false},
        // {id: v1(), title: "GraphQL", isDone: false},
    ],
    ['todolistID2']: [
        // {id: v1(), title: "HTML&CSS2", isDone: true},
        // {id: v1(), title: "JS2", isDone: true},
        // {id: v1(), title: "ReactJS2", isDone: false},
        // {id: v1(), title: "Rest API2", isDone: false},
        // {id: v1(), title: "GraphQL2", isDone: false},
    ]
}


export const TasksReducer = (state = initialState, action: ActionsType): InitialType => {
    switch (action.type) {
        case "ADD-TASK": {
            // const newTask = {id: v1(), title: "NEW-NEW", isDone: true}
            // return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
            const newTask = {...action.payload.newTask}
            return {
                ...state,
                [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
            }
        }
        case "GET-TASK": {
            return {...state, [action.payload.todolistId]: action.payload.tasks}
        }
        default:
            return state
    }
}

type ActionsType = AddTaskACType | GetTaskACType
type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string, newTask: TaskTypeAPI) => {
    return {
        type: "ADD-TASK",
        payload: {todolistId, newTask}
    } as const
}

type GetTaskACType = ReturnType<typeof getTasksAC>

export const getTasksAC = (todolistId: string, tasks: TaskTypeAPI[]) => {
    return {
        type: "GET-TASK",
        payload: {todolistId, tasks}
    } as const
}

export const addTasksTC = (todolistId: string, title: string) => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.addTask(todolistId, title)
        dispatch(addTaskAC(todolistId, result.data.data.item))
        // console.log()
    } catch (e) {
        console.log(e)
    }
}

export const getTasksTC = (todolistId: string) => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.getTasks(todolistId)
        dispatch(getTasksAC(todolistId, result.data.items))
        // console.log()
    } catch (e) {
        console.log(e)
    }
}