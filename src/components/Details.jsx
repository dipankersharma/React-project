import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 import axios from '../helper/axios';
import Loading from './Loading';

function Details() {
  const {id}= useParams();
  const [Product,setProduct]=useState(null)
  const getSingleData = async ()=>{
    try{
      const {data}= await axios.get(`./products/${id}`)
      setProduct(data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getSingleData()
  },[])
  return Product ? (
    <div className='w-[70%] py-[10%] flex h-full m-auto py-[10%] px-[5%]'>
      <img className='object-contain h-[80%] w-[50%] ' src={Product.image} alt="" />
      <div className="content pt-5 p-5">
        <h1 className='text-3xl'>{Product.title}</h1>
        <h3 className='text-zinc-400 my-3 text-2xl' >{Product.category}</h3>
        <h2 className='text-red-500 text-xl'>${Product.price}</h2>
        <p className='text-lg my-2 mb-8' >{Product.description}</p>
        <Link className='mr-6 bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold'>Edit</Link>
        <Link className='mr-4 bg-red-600 px-5 py-1 rounded-lg text-white font-semibold'> Delete</Link>
      </div>
    </div>
  ):<Loading/>
}

export default Details
