import axios from "axios";

export const getProductData = (id) => {
  return axios.get("https://dummyjson.com/products/" + id);
};

export const getProductList = () => {
  return axios.get("https://dummyjson.com/products");
};
