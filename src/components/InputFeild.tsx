import React, { useRef } from 'react'
import './InputFeild.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }
        } className='input' >
            <input ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} className='input__box' type='input' placeholder='Enter a task' />
            <button type='submit' className='input__submit'>Go</button>
        </form >
    )
}

export default InputFeild