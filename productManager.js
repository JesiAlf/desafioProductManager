class ProductManager {
  constructor() {
    this.Product = [];
  }

  getProduct() {
    console.log(this.Product);
  }
  getProductById(id) {
    const product = this.Product.find((prod) => prod.id === id);
    return product !== undefined ? Product : "Not found";
  }
  addTitle({ pid }) {
    let result = this.title.find((prod) => prod.id === pid);
    return result === "undefine" ? "The title is needed" : result;
  }

  addDescription({ pid }) {
    let result = this.Product.find((prod) => prod.id === pid);
    return result === "undefine" ? "The description is needed" : result;
  }

  addPrice({ pid }) {
    let result = this.price.find((prod) => prod.id === pid);
    return result === "undefine" ? "Price is needed" : result;
  }

  addThumbnail({ pid }) {
    let result = this.thumbnail.find((prod) => prod.id === pid);
    return result === "undefine" ? "Thumbnail is needed" : result;
  }

  addCode({ pid }) {
    let result = this.code.find((prod) => prod.id === pid);
    return result === "undefine" ? "Code is needed" : result;
  }

  addStock({ pid }) {
    let result = this.stock.find((prod) => prod.id === pid);
    return result === "undefine" ? "Stock is needed" : result;
  }

  
  addProduct(title, description, price, thumbnail, code, stock) {
    const newProduct = {
      id: this.Product.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.Product.push(newProduct);
  }
}

const productManager = new ProductManager();
productManager.getProduct();

const productA = {
  title: "Product A",
  description: "Products one",
  price: 2000,
  thumbnail: "without image",
  code: "1234j",
  stock: 11,
};

productManager.addProduct(productA);
productManager.getProduct();
productManager.getProductById();

/*console.log(manager.addProduct('product A'));
  
  console.log(manager.getProduct());*/
