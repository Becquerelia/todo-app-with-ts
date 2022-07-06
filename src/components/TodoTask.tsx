import React from 'react'
import { Task } from '../interfaces'

interface Props {
    task: Task;
}

const TodoTask = ({task}: Props) => {
  return (
    <div className='task' >
        <div className='content' >
            <span>Task: {task.taskName}</span>
            <span>Deadline: {task.deadline}</span>
        </div>
        <button>X</button>
         </div>
  )
}

export default TodoTask