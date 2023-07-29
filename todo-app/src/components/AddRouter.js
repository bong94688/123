import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Join2 from './Join2'
import Login from './Login'
const AddRouter = () => {

  return (
    <Routes>
        <Route path='/' element= {<App></App>}></Route>
        <Route path='/join' element= {<Join2></Join2>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
    </Routes>
    )
}

export default AddRouter