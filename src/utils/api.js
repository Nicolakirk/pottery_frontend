import axios from "axios";

const potteryApi = axios.create({
  baseURL: "https://pottery-backend.onrender.com/api",
});

export const fetchProducts = () => {
  return potteryApi.get(`/products`).then((response) => {
    return response.data.products;
  });
};

export const fetchProductsById = (id) => {
  return potteryApi.get(`/products/${id}`).then((response) => {
    return response.data.product;
  });
};

export const fetchLoginByName = (adminname) => {
  return potteryApi
    .get(`/admins/${adminname}`)
    .then((response) => {
      if (!response.data.admin) {
        console.log("Admin not found");
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
};

export const fetchCategories = () => {
  return potteryApi.get(`/categories`).then(({ data }) => {
    return data.categories;
  });
};

export const fetchProductsByCategories = (topic) => {
  console.log(topic)
  return potteryApi.get(`/products/?topic=${topic}`).then((response) => {
    console.log(response.data.products)
    return response.data.products;
  });
};
