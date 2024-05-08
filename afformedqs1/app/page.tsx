"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState();
  const [companyName, setCompanyName] = useState();
  const [category, setCategory] = useState();
  const [numberOfProduct, setNumberOfProduct] = useState();
  useEffect(() => {
    console.log(companyName,category,numberOfProduct)
    const fetchProduct = ()=> {
      fetch(
        `http://localhost:5001/categories/${companyName}/${category}/${numberOfProduct}/products`,
        {
          body: JSON.stringify({ startRange: 1, endRange: 1000 }),
        }
      )
        .then((responce) => responce.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {});
    };
    fetchProduct()
  }, [companyName,category,numberOfProduct]);
  return (
    <div>
      <form className="flex flex-col ">
        <label htmlFor="">companyName</label>
        <br />
        <input
          className="border-solid border-[1px] border-black"
          type="text"
          onChange={(e) => {
            // @ts-ignore
            setCompanyName(e.target.value);
          }}
        />
        <label htmlFor="">category</label>
        <br />
        <input
          className="border-solid border-[1px] border-black"
          type="text"
          onChange={(e) => {
            // @ts-ignore
            setCategory(e.target.value);
          }}
        />
        <label htmlFor="">numberOfProduct</label>
        <br />
        <input
          className="border-solid border-[1px] border-black"
          type="text"
          onChange={(e) => {
            // @ts-ignore
            setNumberOfProduct(e.target.value);
          }}
        />
      </form>
      {/* @ts-ignore */}
      {products?.map((item) => {
        return (
          <div>
            <h1>Product Name : {item.productName}</h1>
            <h3>Price : {item.price}</h3>
            <h3>Rating : {item.rating}</h3>
            <h3>Discount : {item.discount}</h3>
            <h3>Availability : {item.availability}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default page;
