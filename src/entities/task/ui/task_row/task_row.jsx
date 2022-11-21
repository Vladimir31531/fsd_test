import React from 'react'
import { TaskToggle } from '../../../../features/task-toggle'

export const TaskRow = ({ task }) => {
    return (
        <div className="Task_row">
            <div className="checkbox">
                <TaskToggle task={task}/>
            </div>
            <div className="content">
                {task.title}
            </div>
        </div>
    )
}