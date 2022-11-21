import React, {  } from 'react'
import "./TasksList.scss"
import { TasksFilters, useCurrFilter } from '../../../features/tasks-filters'
import { useFilteredTasks, TaskRow, useTasks } from '../../../entities/task'
import MuiLoader from '../../../shared/MuiLoader/MuiLoader'

export default function TasksList() {

    let [CurrFilter, setCurrFilter] = useCurrFilter()

    let [FilteredTasks, setFilteredTasks] = useFilteredTasks(CurrFilter)

    return (
        <div className="TasksList">
            <div className="TasksList_row">
                <h1>Tasks List</h1>
            </div>
            <div className="TasksList_row">
                <TasksFilters setCurrFilter={setCurrFilter} />
            </div>
            <div className="TasksList_row">
                {(FilteredTasks.loading)
                ?
                    <MuiLoader color={'#3443e1'} />
                :
                (FilteredTasks.data.length > 0)
                ?
                FilteredTasks.data.map((task) => {
                    return (
                        <TaskRow 
                            key={task.id}
                            task={task}
                        />
                    )
                })
                :
                <span>Нет задач</span>
                }
            </div>
        </div>
    )
}