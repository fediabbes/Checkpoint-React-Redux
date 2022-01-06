import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { deleteTask, toggleDone } from '../redux/actions/todoActions'
import EditTask from "./EditTask";

function Task({ el }) {
    const dispatch = useDispatch()
    return (
        <div style={{ display: 'flex' }}>
            <p style={{ color: el.done ? "green" : null }} > {el.task} </p>
            <Button variant="outline-success" onClick={() => dispatch(toggleDone(el.id))} >  Done</Button>{' '}
            <Button variant="outline-danger" onClick={() => dispatch(deleteTask(el.id))} > Delete</Button>{' '}
            <EditTask el={el} />
        </div>

    )
}

export default Task