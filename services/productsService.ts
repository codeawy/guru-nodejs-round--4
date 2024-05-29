import { Product } from "../interface";
import { fakeProductsData } from "../utils/fakeData";

// *  responsible for data storage and retrieval
export default class ProductsService {
  private products: Product[] = fakeProductsData;

  findAll(): Product[] {
    return this.products;
  }
}
