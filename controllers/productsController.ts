import { Request, Response } from "express";
import ProductsService from "../services/productsService";

export default class ProductsController {
  // **  dependency injection
  constructor(private productsService: ProductsService) {
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(req: Request, res: Response) {
    console.log(this);
    res.send(this.productsService.findAll());
  }
}
