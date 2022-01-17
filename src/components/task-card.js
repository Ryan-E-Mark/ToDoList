import React, { useState } from 'react';

const TaskCard = () => {
    const [task, setTask] = useState("")

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return(
        <div>
            <h3>Title</h3>
            <p>{task}</p>
            <button onClick={handleDelete}>X</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default TaskCard;