import React from 'react'
import { Todo } from '../model'
import './InputFeild.css'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    const todosList = todos.map((item) => {
        return <li key={item.id}>{item.todo}</li>
    })

    return (
        <div className='todos'>{todosList}</div>
    )
}

export default TodoList