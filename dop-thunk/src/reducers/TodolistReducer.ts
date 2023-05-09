import {useState} from "react";
import {Dispatch} from "redux";
import {todolistAPI, TodolistType} from "../api/todolistAPI";

// type InitialType = {
//     id: string,
//     title: string,
//     filter: string
// }

// export type TodolistType = {
//     id: string,
//     title: string,
//     addedDate: string,
//     order: number
// }

type SumType = TodolistType & {
    filter: string
}

let initialState: SumType[] = [
    // {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    // {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]


export const TodolistReducer = (state = initialState, action: UnionActionsType): SumType[] => {
    switch (action.type) {
        case "GET-TODOS": {
            return action.payload.todos.map((el: any) => ({...el, filter: 'all'}))
        }
        default:
            return state
    }
}
type UnionActionsType = GetTodolistACType
type GetTodolistACType = ReturnType<typeof getTodolistAC>
const getTodolistAC = (todos: any) => {
    console.log(todos)
    return {
        type: 'GET-TODOS',
        payload: {
            todos
        }
    } as const
}

export const getTodolistTC = () => async (dispatch: Dispatch) => {
    try {
        const result = await todolistAPI.getTodolists()
        dispatch(getTodolistAC(result.data)
        )
    } catch (e) {
        console.log(e)
    }

}