import React from 'react'
import './Task.css'
import { Draggable } from 'react-beautiful-dnd'


const Task = ({ text, index, id }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div className='task' {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    {text}
                </div>
            )}
        </Draggable>

    )
}

export default Task