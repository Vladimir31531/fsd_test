import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function AdminRouter() {
  return (
    <Routes>

      <Route path="/admin">
        <Route index element={<div>index admin</div>} />
      </Route>

    </Routes>
  )
}