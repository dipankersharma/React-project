import React, { useContext, useState } from "react";
import { productContext } from "../helper/Context";
import { nanoid } from "nanoid";

function Create() {
  const [products,setproducts] = useContext(productContext);

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length<5
    ) {
      alert("Each and every entry should be greater than 4 characters");
    }
    const product = {
      id:nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    console.log(products);
  };

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
          settitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="url"
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
          setprice(e.target.value);
        }}
        value={price}
      />
      <textarea
        placeholder="Product description"
        name="Description"
        id=""
        className="bg-zinc-200 w-1/2 rounded p-2 text-xl"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <div className="w-1/2 mt-3">
        <button className="py-3 px-5 border rounded border-blue-300 text-blue-400">
          Add new product
        </button>
      </div>
    </form>
  );
}

export default Create;
