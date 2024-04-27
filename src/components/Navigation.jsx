import React from 'react'

function Navigation() {
  return (
    <nav className='h-full w-[15%] bg-zinc-100 flex flex-col items-center pt-5'>
    <a className='py-3 px-5 border rounded border-blue-300 text-blue-400 ' href="/create">Add new product</a>
    <hr className='w-[80%] my-3' />
    <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
    <ul  className='  w-[80%]'>
      <li className='mb-3 flex items-center gap-2'>
         <span className='w-[15px] h-[15px]  bg-blue-100 rounded-full'></span>Category-1</li>
      <li className='mb-3 flex items-center gap-2'>
         <span className='w-[15px] h-[15px]  bg-red-100 rounded-full'></span>Category-2</li>
      <li className='mb-3 flex items-center gap-2'>
         <span className='w-[15px] h-[15px]  bg-green-100 rounded-full'></span>Category-1</li>
    </ul>
  </nav>
  )
}

export default Navigation
