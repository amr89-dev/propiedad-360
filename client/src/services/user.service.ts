import { User, UserId } from "../types";
import api from "./api";

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const createUser = async (userData: User) => {
  try {
    const response = await api.post("/user", userData);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateUser = async (userId: UserId, userData: User) => {
  try {
    const response = await api.put(`/user/${userId}`, userData);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteUser = async (userId: UserId) => {
  try {
    const response = await api.delete(`/user/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
