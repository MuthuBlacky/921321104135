import express from "express";
require('dotenv').config();
export const router = express.Router();

router.route('/:companyname/:categoryname/:n/products').get((req,res,next) => {
    try{
      console.log(typeof req.params.n)
      const startRange = parseInt(req.body.startRange);
      const endRange = parseInt(req.body.endRange);
    const numberOfProduct =  parseInt(req.params.n)
    console.log(numberOfProduct)
        if(numberOfProduct > 10){
            res.status(400)
            throw new Error("Number of product is more then 10 use page limit")
        }
        const token = process.env.TOKEN
        console.log(token)
        fetch(`http://20.244.56.144/test/companies/${req.params.companyname}/categories/${req.params.categoryname}/products?top=${numberOfProduct}&minPrice=${startRange}&maxPrice=${endRange}`,{
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

router.route('/:companyname/:categoryname/:n/:page/products').get((req,res,next)=>{
    const token = process.env.TOKEN
    const numberOfProduct =  parseInt(req.params.n)
    const startRange = parseInt(req.body.startRange);
    const endRange = parseInt(req.body.endRange);
    fetch(`http://20.244.56.144/test/companies/${req.params.companyname}/categories/${req.params.categoryname}/products?top=${numberOfProduct}&minPrice=${startRange}&maxPrice=${endRange}`,{
            method : "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(data => {
          console.log(data)
           const paginated = []
           for(let i = 0;i<data.length;i+=10){
            paginated.push(data.slice(i,i+10))
           }
           res.json(paginated)
        }).catch(error => {
            next(error)})
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
