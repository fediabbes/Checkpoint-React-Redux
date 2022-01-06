import { useSelector } from 'react-redux'
import Task from './Task'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


function TaskList() {
    const todos = useSelector(state => state.todoReducer.todos)
    const [filter, setFilter] = useState(false)
    const [filterdone, setFilterdone] = useState(false)
    return (
        <div className='inbody'>
            <Button variant="info" onClick={() => setFilter(false)}>Show All</Button>{' '}
            <Button variant="success" onClick={() => { setFilter(true); setFilterdone(true) }}>Tasks Done</Button>{' '}
            <Button variant="warning" onClick={() => { setFilter(true); setFilterdone(false) }} >Tasks Not Done</Button>
            <br />
            <div className='inBodyMapList'>
                {
                    !filter ?
                        todos.map(el => <Task key={el.id} el={el} ></Task>)
                        : filterdone ?
                            todos.filter(el => el.done)
                                .map(el => <Task key={el.id} el={el} ></Task>)
                            : todos.filter(el => !el.done)
                                .map(el => <Task key={el.id} el={el} ></Task>)
                }
            </div>
        </div>
    )
}

export default TaskList