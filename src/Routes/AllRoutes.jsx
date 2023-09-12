import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
    </Routes>
  )
}

export default AllRoutes