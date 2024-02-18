import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";


const router = express.Router();

// GET Routes
router.route("/products").post(addNewProduct);
router.route("/products").get(getAllProducts);
router.route("/delete/:id").delete(deleteProduct);
router.route("/products/:id/update_quantity").put(updateProduct);





export default router;
