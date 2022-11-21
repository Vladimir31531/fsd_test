import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

/* export let useTasks = () => {
    let [tasks, settasks] = useState({
        loading: true,
        data: [],
    })
    useEffect(() => {
        settasks({
            loading: false,
            data: [{
                    id: 1,
                    title: 'weurhrgi wioeuhr gowyerg ogwoe uruo',
                    status: 'opened',
                },
                {
                    id: 2,
                    title: 'weurhrgi wioeuhr gowyerg ogwoe uruo',
                    status: 'closed',
                },
                {
                    id: 3,
                    title: 'weurhrgi wioeuhr gowyerg ogwoe uruo',
                    status: 'opened',
                },
                {
                    id: 4,
                    title: 'weurhrgi wioeuhr gowyerg ogwoe uruo',
                    status: 'closed',
                },
            ]
        })
    }, [])
    return [tasks, settasks]
} */

export let useFilteredTasks = (filter) => {
    let tasks = useSelector((state) => state.globalReducer.tasks)
    useEffect(() => {
        setFilteredTasks({
            ...FilteredTasks,
            loading: true
        })
        let arr = tasks.data.filter((task) => {
            if (filter === 'all') {
                return true
            }
            if (task.status === filter) {
                return true
            }
            return false
        })
        setTimeout(() => {
            setFilteredTasks({
                loading: false,
                data: arr,
            })
        }, 10);
    }, [filter, tasks])
    let [FilteredTasks, setFilteredTasks] = useState({
        loading: true,
        data: [],
    })
    return [FilteredTasks, setFilteredTasks]
}