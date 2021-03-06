import { Controller, Get , Post,Body,Param,Patch,Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
@Post()
insertProduct(@Body('title')title:string,@Body('description')description:string,@Body('price')price:number){
const newProd= this.productsService.insertProduct(title,description,price)
return {id:newProd,title,description,price}
}
@Get()
getAllProducts(){
  const prodList=this.productsService.allProducts()
  return (prodList);
}

}
