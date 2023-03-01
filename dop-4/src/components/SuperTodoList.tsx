import React from 'react';

type SuperTodoListType = {
    tasks: TasksType []
    children: React.ReactNode
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const SuperTodoList: React.FC<SuperTodoListType> = ({tasks, children}) => {
    return (
        <div>
            <ul>
                {tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type={"checkbox"} checked={el.isDone}/>
                            {el.title}
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};