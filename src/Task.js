import React from 'react';
import {deleteCard} from './store'
import {connect} from 'react-redux'
import {moveCard} from './store'

const Task = (props) => {
    const task = props.task
    return (
        <div className='task'>
            <h3>{task.title}</h3>
            <button disabled={props.section === 'toDo'} onClick={() => props.moveTask(task, props.section, props.prev)} >Left</button>
            <button disabled={props.section === 'done'} onClick={() => props.moveTask(task, props.section, props.next)}>Right</button>
            <p>{task.details}</p>
            <button onClick={() => props.deleteTask(task.id, props.section)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTask: (id, section) => dispatch(deleteCard(id, section)),
    moveTask: (card, origin, destination) => dispatch(moveCard(card, origin, destination))
})

export default connect(null, mapDispatchToProps)(Task)