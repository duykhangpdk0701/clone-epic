const router = require("express").Router();

const wishlistController = require("../controller/wishlist");

router.get("/find-wishlist/:userId", wishlistController.wishlistGetByUserId);
router.post("/add-wishlist", wishlistController.addWishlist);
router.post("/remove-wishlist", wishlistController.removeWishlist);

module.exports = router;
