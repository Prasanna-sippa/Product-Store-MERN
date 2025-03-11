import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

//API for creating product
router.post("/", createProduct);

//API to get all products
router.get("/", getProducts);

//API to update a product
router.put("/:id", updateProduct);

//API for deleting product
router.delete("/:id", deleteProduct);

export default router;