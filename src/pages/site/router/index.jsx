import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../../widgets/footer/Footer'
import Header from '../../../widgets/header/Header'
import Main from '../TasksList/TasksList'

export default function SiteRouter() {
  return (
    <>
      {/* <Header/> */}
      <Routes>

        <Route path="/">
          <Route index element={<Main />} />
        </Route>

      </Routes>
      {/* <Footer/> */}
    </>
  )
}