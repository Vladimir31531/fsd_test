import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { filters } from './config'

export const TasksFilters = ({setCurrFilter}) => {

    useEffect(() => {
        setCurrFilter(filters[0].slug)
    }, [])

    let [selectedBtn, setselectedBtn] = useState(1)

    return (
        <div className="TasksFilters">
            {filters.map((filter) => {
                return (
                    <button 
                        key={filter.id} 
                        onClick={() => { setCurrFilter(filter.slug); setselectedBtn(filter.id) }}
                        className={(selectedBtn == filter.id) ? "selected" : ""}
                    >
                        {filter.title}
                    </button>
                )
            })}
        </div>
    )
}