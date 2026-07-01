import express from "express";
import {
  addCart,
  getCart,
  increaseQty,
  decreaseQty,
  deleteCart,
} from "../controlled/cartcontrolled.js";

const router = express.Router();

router.post("/addcart", addCart);
router.get("/cart", getCart);
router.put("/increase/:id", increaseQty);
router.put("/decrease/:id", decreaseQty);
router.delete("/delete/:id", deleteCart);

export default router;