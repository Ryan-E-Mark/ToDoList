import React, { useState } from 'react';

const TaskCard = () => {
    const [task, setTask] = useState("")

    const handleEdit = () => {
        
    }

    const handleDelete = () => {

    }

    return(
        <div>
            <p>{task}</p>
            <button onClick={handleDelete}>X</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default TaskCard;