import { useDispatch } from "react-redux"
import { updateTasks } from "../../processes/redux/globalReducer"

let useSetThroughDispatch = (content) => {
    let dispatch = useDispatch()
    dispatch(updateTasks(content))
}

export let ToggleCheckbox = (id, tasks) => {
    /* let obj = {...tasks}
    console.log(obj) */
    tasks.data.forEach((task) => {
        if (task.id == id) {
            let obj = {...task}
            obj.status = (obj.status == 'opened') ? 'closed' : (obj.status == 'closed') ? 'opened' : ''
        }
    })
    useSetThroughDispatch(tasks)
    return ''
}