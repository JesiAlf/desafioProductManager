
export class Product {
    
    addProduct( title, description, price, thumbnail, code= Date() ){
        const newProduct = {

        id: this.product.length + 1,
        title,
        description, 
        price, 
        thumbnail,
        code,
        stock,
    }
    this.product.push(newProduct)
}

addTitle({pid}){
let result= this.title.find(prod=>prod.id===pid)
return result === 'undefine' ? 'The title is needed': result
}

addDescription({pid}){
    let result= this.description.find(prod=>prod.id===pid)
    return result === 'undefine' ? 'The description is needed': result
    }

addPrice({pid}){
        let result= this.price.find(prod=>prod.id===pid)
        return result === 'undefine' ? 'Price is needed': result
        }

addThumbnail({pid}){
            let result= this.thumbnail.find(prod=>prod.id===pid)
            return result === 'undefine' ? 'Thumbnail is needed': result
            }

addCode({pid}){
                let result= this.code.find(prod=>prod.id===pid)
                return result === 'undefine' ? 'Code is needed': result
                }  
                
addStock({pid}){
                    let result= this.stock.find(prod=>prod.id===pid)
                    return result === 'undefine' ? 'Stock is needed': result
                    }
}

const Manager = new Manager()
console.log(Manager.addProduct('product one', 'Rg', 2500))
console.log(Manager.addProduct('product two', 'Rg', 2500))
console.log(Manager.addProduct('product three', 'Rg', 2500))
console.log(Manager.addProduct('product four',' Rg', 2500))
console.log(Manager.getProduct())