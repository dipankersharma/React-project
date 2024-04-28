import React, { useContext } from 'react'
import { productContext } from "../helper/Context";
import { Link } from 'react-router-dom';

function Navigation() {
  const [products] = useContext(productContext);
  let category = products.reduce((acc,cv)=>[...acc,cv.category],[]);
  category= [...new Set(category)];

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.6)`;
  }
  return (
    <nav className='h-full w-[15%] bg-zinc-100 flex flex-col items-center pt-5'>
    <a className='py-3 px-5 border rounded border-blue-300 text-blue-400 ' href="/create">Add new product</a>
    <hr className='w-[80%] my-3' />
    <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
   {category.map((items,index)=>(
       <div key={index} className='  w-[80%]'>
       <Link to={`/?category=${items}`} className='mb-3 flex items-center gap-2'>
          <span style={{backgroundColor:color()}} className='w-[15px] h-[15px] rounded-full'></span>{items}</Link>
     </div>
   ))}
  </nav>
  )
}

export default Navigation
