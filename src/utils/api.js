import axios from "axios"

const potteryApi = axios.create({
    baseURL : "https://pottery-backend.onrender.com/api"
})

export const fetchProducts = () =>{
    return potteryApi.get(`/products`).then
    ((response)=>{
        return response.data.products
    })
}

export const fetchProductsById = (id) =>{
  
    return potteryApi.get(`/products/${id}`).then
    ((response)=>{
       
        return response.data.product
    })
}