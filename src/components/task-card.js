import React, { useState } from 'react';

const TaskCard = (props) => {

    const {task} = props

    console.log(task)

    const [currentTask, setCurrentTask] = useState("")

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return(
        <div>
            <h3>{task.title}</h3>
            <p>{task.steps}</p>
            <button onClick={handleDelete}>X</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default TaskCard;