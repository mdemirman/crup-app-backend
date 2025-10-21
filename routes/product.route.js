import express from 'express';
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts); // get all products
router.get("/:id", getProduct); // get single product
router.post("/", createProduct); // create a product
router.put("/:id", updateProduct); // update a product
router.delete("/:id", deleteProduct); // delete a product


export default router;