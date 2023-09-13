import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import AddCourse from '../Components/AddCourse'
import Privateroutes from './Privateroutes'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Privateroutes><AddCourse/></Privateroutes>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default AllRoutes