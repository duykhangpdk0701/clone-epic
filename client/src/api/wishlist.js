import axiosClient from "./axiosClient";

const wishlistApi = {
  getById(userId) {
    const url = `/wishlist/find-wishlist/${userId}`;
    return axiosClient.get(url);
  },

  addWishlist(userId, productId) {
    const url = `/wishlist/add-wishlist`;
    return axiosClient.post(url, { userId, productId });
  },

  removeWishlist(id) {
    const url = "/wishlist/remove-wishlist";
    return axiosClient.delete(url, { data: { id } });
  },

  getCountWishlistByUserId(userId) {
    const url = "/wishlist/count-wishlist";
    return axiosClient.post(url, { userId });
  },
};

export default wishlistApi;
