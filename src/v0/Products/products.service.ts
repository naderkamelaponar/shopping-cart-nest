import { Injectable } from '@nestjs/common';
 class Product {
  constructor (
    public id:string,
    public title:string,
    public description:string,
    public price:number 
  ){}
}

@Injectable()
export class ProductsService {
  private products:Product[]=[]
  insertProduct(title:string,desc:string,price:number){
    const prodId= Date.now().toString()
    const newProduct = new Product(prodId,title,desc,price)
    this.products.push(newProduct)
    return prodId
  }
}
