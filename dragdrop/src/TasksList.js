import React from 'react'
import Task from './Task'
import { data } from './data'
import './TasksList.css'
import { Droppable } from 'react-beautiful-dnd'


const TasksList = () => {
    return (
        <div className='container' >

        <h3>Úkoly</h3>
       <Droppable droppableId='droppable-1'>
           {(provided) => (
            <div  ref={provided.innerRef}
            {...provided.droppableProps} >
                    {data.map((task, index) => (
                     <Task data={data} key={index} text={task.text} id={task.id} index={index}/>
    ))}
            {provided.placeholder}        
                </div>
           )}
                
                </Droppable>   

        </div>

    )
}

export default TasksList