import React from 'react'
import { Link } from 'react-router-dom'
function Details() {
  return (
    <div className='w-[70%] py-[10%] flex h-full m-auto py-[10%] px-[5%]'>
      <img className='object-contain h-[80%] w-[50%] ' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      <div className="content pt-10">
        <h1 className='text-3xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='text-zinc-400 my-3 text-2xl' >men's clothing</h3>
        <h2 className='text-red-500 text-xl'>$109.95</h2>
        <p className='text-lg my-2 mb-8' >Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link className='mr-6 bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold'>Edit</Link>
        <Link className='mr-4 bg-red-600 px-5 py-1 rounded-lg text-white font-semibold'> Delete</Link>
      </div>
    </div>
  )
}

export default Details
