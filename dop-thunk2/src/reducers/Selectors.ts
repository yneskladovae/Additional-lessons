import {RootReducerType} from "../store/store";

export const  TodolistSelectors = (state: RootReducerType) => state.todos
export const  TasksSelectors = (state: RootReducerType) => state.tasks