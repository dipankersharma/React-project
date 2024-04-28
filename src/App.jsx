
import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'

function App() {
      
       const {search,pathname} = useLocation()
       console.log(search,pathname)

  return (
    <div className="w-full h-screen flex ">
      {(pathname!="/"|| search.length>0) &&
            <Link to="/" className=' py-1 px-4 absolute left-[17%] top-[1%] bg-red-600 text-white rounded-lg'>Home</Link>}

     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/create' element={<Create/>} ></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
       
      </Routes>
     
    </div>
    
  )
}

export default App
