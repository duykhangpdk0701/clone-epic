import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll() {
    const url = "/category";
    return axiosClient.get(url);
  },
};

export default categoriesApi;
