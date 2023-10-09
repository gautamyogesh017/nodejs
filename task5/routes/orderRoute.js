const express = require("express");
const {
  addToCart,
  getOrders,
  getOneOrder,
  viewCart,
  checkout,
} = require("../modules/orders/orderController");

const router = express.Router();

router.route("/").get(getOrders);

router.route("/:id").get(getOneOrder);

router.route("/add-to-cart").post(addToCart);

router.route("/view-cart/:id").get(viewCart);

router.route("/checkout/:userId/:cartId").post(checkout);

module.exports = router;
