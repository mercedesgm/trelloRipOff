import React from 'react';
import Task from './Task';


const RectangleThing = (props) => {
    return (
        <div className="section">
            <h2>{props.title}</h2>
            <div className='taskHolder'>
                {props.tasks.map(task => <Task section={props.name} key={task.id} task={task} next={props.next} prev={props.prev}/>)}
            </div>
        </div>
    )
}

export default RectangleThing