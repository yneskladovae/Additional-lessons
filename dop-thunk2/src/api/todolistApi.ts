import axios from "axios";

const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers:{
        'API-KEY': '0e5dc50f-7e9f-4eda-9157-a63c5026aaad'
    }
})


export const todolistApi={
    getTodolists(){
        return instance.get<TodolistType[]>('todo-lists')
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    addTask(todolistId: string, title: string){
        return instance.post(`todo-lists/${todolistId}/tasks`, {title})

    }
}

export type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskTypeAPI[]
}

export type TaskTypeAPI = {
    description: string
    title: string
    status: boolean
    priority: any
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}