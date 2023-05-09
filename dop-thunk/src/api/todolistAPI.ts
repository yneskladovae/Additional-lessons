import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '3e0c4b7e-0bea-4155-a31d-3500dd1e1abc'
    }
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType>('todo-list')
    }
}

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}