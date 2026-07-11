import API from "./api";

export const loginUser = async (loginData) => {
  return await API.post("/login", loginData);
};