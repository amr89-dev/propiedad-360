import { IFormData } from "../components/LoginForm/LoginForm";
import api from "./api";

export const login = async (loginData: IFormData) => {
  console.log(loginData);

  try {
    const response = await api.post("/login", loginData);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
