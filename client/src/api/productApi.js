import axiosClient from "./axiosClient";

const productApi = {
  getAll(search) {
    const url = "/products?" + search;
    return axiosClient.get(url);
  },

  getById(id) {
    console.log(id);
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
