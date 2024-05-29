import { Router } from "express";
import ProductsService from "../services/productsService";
import ProductsController from "../controllers/productsController";

const productsRouter = Router();

const productService = new ProductsService();
const { getProducts } = new ProductsController(productService);

productsRouter.route("/").get(getProducts);

export default productsRouter;
