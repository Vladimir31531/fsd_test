import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        tasks: {
            loading: true,
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
        }
    },
    reducers: {
        updateTasks: (state, action) => {
            let newObj = action.payload
            let tasks = {...state.tasks}
            tasks.data.forEach((task, i) => {
                if (task.id == newObj.id) {
                    tasks.data[i] = newObj
                }
            })
            state.tasks = tasks
        }
    }
})

export const {
    updateTasks
} = globalReducer.actions

export default globalReducer.reducer