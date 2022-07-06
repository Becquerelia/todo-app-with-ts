import React from 'react'
import { Task } from '../interfaces'

interface Props {
    task: Task;
}

const TodoTask = ({task}: Props) => {
  return (
    <div>Task: {task.taskName} Deadline: {task.deadline} </div>
  )
}

export default TodoTask