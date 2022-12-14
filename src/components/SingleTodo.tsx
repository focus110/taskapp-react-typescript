import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

type Props = {

    item: Todo,
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, todos, setTodos }: Props) => {
    return (
        <form className='todos__single'>
            <span className='todos_single__text'>{item.todo}</span>
            <div>
                <span className='icon'>
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    <AiFillDelete />
                </span>
                <span className='icon'>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo