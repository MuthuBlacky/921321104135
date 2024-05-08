import express from "express";
require('dotenv').config();
export const router = express.Router();
router.route('/:categoryname/products').get((req,res,next)=>{
    

})

router.route('/:categoryname/:n/products').get((req,res,next) => {
    try{
    const numberOfProduct =  parseInt(req.params.n)
        if(numberOfProduct > 10){
            res.status(400)
            throw new Error("Number of product is more then 10 use page limit")
        }
        const token = process.env.TOKEN
        fetch(`http://20.244.56.144/test/companies/:companyname/categories/${req.params.categoryname}/products?top=${numberOfProduct}&minPrice=p&maxPrice=q`,{
            method : "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(data => {
            res.json(data);
        }).catch(error => {
            next(error)
        })
    }
    catch(error){
        next(error)
    }
})

router.route('/:categoryname/:n/:page/products').get((req,res,next)=>{
  const page = parseInt(req.params.page);
  const numberOfPages = parseInt(req.params.n);
  const data = [
    {
      productName : "Laptop 1",
      price : 2236,
      rating:4.7,
      discount : 63,
      availability :"yes"
    },
    {
      productName : "Laptop 13",
      price :1424,
      rating:4.5,
      discount : 14,
      availability :"out-of-stock"
    },
    {
      productName : "Laptop 3",
      price : 9013,
      rating:4.7,
      discount : 63,
      availability :"yes"
    },
    {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 1",
        price : 2236,
        rating:4.7,
        discount : 63,
        availability :"yes"
      },
      {
        productName : "Laptop 13",
        price :1424,
        rating:4.5,
        discount : 14,
        availability :"out-of-stock"
      },
      {
        productName : "Laptop 3",
        price : 9013,
        rating:4.7,
        discount : 63,
        availability :"yes"
      }
    ]
    console.log(JSON.stringify(data))
    const token = process.env.TOKEN
    const numberOfProduct =  parseInt(req.params.n)
    fetch(`http://20.244.56.144/test/companies/:companyname/categories/${req.params.categoryname}/products?top=${numberOfProduct}&minPrice=p&maxPrice=q`,{
            method : "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(data => {
           const paginated = []
           for(let i = 0;i<data.length;i+=10){
            paginated.push(data.slice(i,i+10))
           }
           res.json(paginated)
        }).catch(error => {
            next(error)
    })
})

router.route("/:sort/:parameter").get((req,res)=>{
    const products = req.body.array;
    console.log(products)
    const asc = parseInt(req.params.sort);
    const parameter = req.params.parameter;
    if(asc == 0) products.sort((a:any, b:any) => a[parameter] - b[parameter]);
    else products.sort((a:any, b:any) => b[parameter] - a[parameter]);
    res.json(products)
})
