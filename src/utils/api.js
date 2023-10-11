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


export const fetchLoginByName = (adminname) => {
    return potteryApi.get(`/admins/${adminname}`)
      .then((response) => {
        if (!response.data.admin) {
          console.log("Admin not found");
          // You can choose to throw an error or return a specific value here.
          // For example, you can throw an error like this:
          // throw new Error("Admin not found");
        } else {
          return response.data.admin;
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log("Resource not found (404 error)");
       
          return null;
        } else {
        
          console.error("An error occurred:", error);
          throw error; 
        }
      });
  }
  
  
  
  
  
  
  

