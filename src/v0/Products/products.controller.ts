import { Controller, Get , Post,Body,Param,Patch,Delete } from '@nestjs/common';
import { title } from 'process';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
@Post()
insertProduct(@Body('title')title:string,@Body('description')description:string,@Body('price')price:number){
const newProd= this.productsService.insertProduct(title,description,price)
return {id:newProd}
}
@Get()
getProduct(){
  return {get:'Product'}
}
}
