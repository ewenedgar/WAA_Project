import axios from "../utils/axios";

export const getAllusers = async () => {
  return await axios.get("users/");
};

export const getuser = async (id) => {
  return await axios.get(`users/${id}`);
};

export const createuser = async (data) => {
  return await axios.post("/users", data);
};

export const deleteuser = async (id) => {
  return await axios.post(`users/${id}`);
};

export const updateuser = async (id, data) => {
  return await axios.put(`users/${id}`, data);
};
