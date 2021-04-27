import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllPosts = () => {
  return instance.get("/posts");
};
