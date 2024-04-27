import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Navigation/>
      <div className="home w-[85%] p-10 pt-[3%] flex flex-wrap overflow-x-hidden overflow-y-auto">
      <Link to="/details/1" className="card mr-3 mb-2 p-5 border shadow rounded w-[16%] h-[32vh] flex justify-center flex-col items-center  ">
        <div style={{backgroundImage:"URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}} className='image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110'>

        </div>
        <h1 className='hover:text-blue-400' >Bags</h1>
      </Link>
      </div>
      </>
  )

}

export default Home
