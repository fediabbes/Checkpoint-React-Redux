import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/todoActions'


function AddTask() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const HandleAdd = () => {
        dispatch(addTask(text))
        setText("")
    }
    return (
        <Form>
            <Form.Control type="text" placeholder="Add Task Here" onChange={(e) => setText(e.target.value)} value={text} />
            <br />
            <Button variant="outline-dark" onClick={HandleAdd} > Add Task !</Button>
        </Form>
    )
}

export default AddTask