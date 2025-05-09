import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTodo } from "../features/todo/todoSlice"

export default function AddForm() {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(task)
        dispatch(addTodo(task))
        setTask("")
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="Add task" type="text" value={task} onChange={(event) => setTask(event.target.value)}></input>
                <button>Add task</button>
            </form>
        </>
    )
}