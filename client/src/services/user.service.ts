import api from "./api";

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const createUser = async (userData) => {
  try {
    const response = await api.post("/user", userData);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/user/${userId}`, userData);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteUser = async (userId) => {
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
