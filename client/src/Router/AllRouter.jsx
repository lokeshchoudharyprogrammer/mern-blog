import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import LoginPage from '../Page/LoginPage'
import RegisterPage from '../Page/RegisterPage'

const AllRouter = () => {
    return (
        <>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                {/* <Route path */}
            </Routes>
        </>
    )
}

export default AllRouter
