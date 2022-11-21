import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTasks } from '../../processes/redux/globalReducer'

export const TaskToggle = ({ task }) => {

    let dispatch = useDispatch()
    let ToggleCheckbox = (task) => {
        let Task = {...task}
        Task.status = (Task.status == 'opened') ? 'closed' : (Task.status == 'closed') ? 'opened' : ''
        dispatch(updateTasks(Task))
    }

    return (
        <input type="checkbox" checked={(task.status == 'closed') ? true : false} onChange={() => {ToggleCheckbox(task)}} />
    )
}