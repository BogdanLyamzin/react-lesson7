import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export const getOnePage = (limit, page) => {
  return instance.get("/images/search", {
    params: {
      limit,
      page,
    },
  });
};
