import React, { useState } from "react";

function Create() {
  const [Title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

 const addProductHandler= (e)=>{
    e.preventDefault();
    const product={
      Title,
      image,
      category,
      Price,
      Description
    }
    console.log(product);
 
 }  



  return (
    <form 
      onSubmit={addProductHandler}
      className="flex flex-col items-center w-full h-screen p-[5%]"
      action=""
    >
      <h1 className="text-4xl mb-4 w-1/2">Add new product</h1>
      <input
        type="text"
        placeholder="Product name"
        className="w-1/2 bg-zinc-200 p-2 rounded text-xl mb-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={Title}
      />
      <input type="url"
            className="w-1/2 bg-zinc-200 p-2 rounded text-xl mb-3"
            placeholder="image url...."
            onChange={(e) => {
                setimage(e.target.value);
              }}
              value={image}
            />
      <input
        type="text"
        placeholder="Category"
        className="w-1/2 bg-zinc-200 p-2 rounded text-xl mb-3"
        onChange={(e) => {
            setcategory(e.target.value);
          }}
          value={category}
      />
      <input
        type="text"
        placeholder="Price"
        className="w-1/2 bg-zinc-200 p-2 rounded text-xl mb-3"
        onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={Price}
      />
      <textarea
        placeholder="Product description"
        name="Description"
        id=""
        className="bg-zinc-200 w-1/2 rounded p-2 text-xl"
        onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={Description}
      ></textarea>
      <div className="w-1/2 mt-3">
      <button className='py-3 px-5 border rounded border-blue-300 text-blue-400'>Add new product</button>
      </div>
    </form>
  )};


export default Create;
