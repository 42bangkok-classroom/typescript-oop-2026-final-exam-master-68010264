import {Product} from './product.interface'
export class ProductService implements Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string
    constructor(id: number,
        name: string,
        price: number,
        stock: number,
        description: string) {
            this.name = name;
            this.price = price;
            this.stock = stock;
            this.id = id;
            this.description = description;
        }

    findAll() {
        return console.log(this.id,this.name,this.price,this.stock,this.description);
    }


}