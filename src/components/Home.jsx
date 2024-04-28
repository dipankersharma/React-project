import React, { useContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../helper/Context";
import Loading from "./Loading";
import axios from "../helper/axios";

function Home() {
  const [products] = useContext(productContext);

  const { search } = useLocation(); // this is used to get the url of the component

  const list = decodeURIComponent(search.split("=")[1]); // this is used to get the actuall category

  const [filteredProduct, setfiltertedProduct] = useState(null);
  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${list}`);
      setfiltertedProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if( !filteredProduct || list=="undefined") setfiltertedProduct(products);
    if (list!="undefined") getProductCategory();
  }, [list,products]);

  return products ? (
    <>
      <Navigation />
      <div className="home w-[85%] p-10 pt-[3%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProduct &&
          filteredProduct.map((item, index) => (
            <Link
              to={`/details/${item.id}`}
              key={index}
              className="card mr-3 mb-2 p-5 border shadow rounded w-[16%] h-[32vh] flex justify-center flex-col items-center  "
            >
              <div
                style={{ backgroundImage: `URL(${item.image})` }}
                className="image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
              ></div>
              <h1 className="hover:text-blue-400">{item.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
