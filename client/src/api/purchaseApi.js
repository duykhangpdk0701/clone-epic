import axiosClient from "./axiosClient";

const purchaseApi = {
  getById(userId) {
    const url = `/purchase/${userId}`;
    return axiosClient.get(url);
  },

  addWishlist(userId, productId) {
    const url = `/wishlist/add-wishlist`;
    return axiosClient.post(url, { userId, productId });
  },

  removeWishlist(userId, productId) {
    const url = "/wishlist/remove-wishlist";
    return axiosClient.delete(url, { userId, productId });
  },
};

export default purchaseApi;
