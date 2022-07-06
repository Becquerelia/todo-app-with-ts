import React from 'react'
import { Task } from '../interfaces'

interface Props {
    task: Task;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
    <div className='task' >
        <div className='content' >
            <span>Task: {task.taskName}</span>
            <span>Deadline: {task.deadline}</span>
        </div>
        <button onClick={ () => {completeTask(task.taskName)} } >X</button>
         </div>
  )
}

export default TodoTask