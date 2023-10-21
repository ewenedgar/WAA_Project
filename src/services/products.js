import axios from "../utils/axios";

export const getAllProducts = async () => {
  return await axios.get("products");
};

export const getProduct = async (id) => {
  return await axios.get(`products/${id}`);
};

export const createProduct = async (data) => {
  return await axios.post("products", data);
};

export const deleteProduct = async (id) => {
  return await axios.post(`products/${id}`);
};

export const updateProduct = async (id, data) => {
  return await axios.put(`products/${id}`, data);
};
