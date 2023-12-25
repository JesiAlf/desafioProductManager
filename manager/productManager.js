import { Product } from "../model/productModel";

export class ProductManager {
  #listProduct;
  constructor() {
    this.Product = [];
  }

  addProduct(product) {
    this.#validateFieldCode(product);
    this.#listProduct.push(product);
  }

  getProduct() {
    return [...this.#listProduct];
  }

  #validateFieldCode(product) {
    const result = this.#listProduct.some((p) => p.equal(product));
    if (result) {
      throw new Error("Ya hay un producto con ese código");
    }
  }
}
