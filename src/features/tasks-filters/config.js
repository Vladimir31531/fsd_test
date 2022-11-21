import { useState } from "react"

export const filters = [
    {
        id: 1,
        title: "All",
        slug: "all",
    },
    {
        id: 2,
        title: "Opened",
        slug: "opened",
    },
    {
        id: 3,
        title: "Closed",
        slug: "closed",
    },
]

export let useCurrFilter = () => {
    let [CurrFilter, setCurrFilter] = useState(filters[0].slug)
    return [CurrFilter, setCurrFilter]
}