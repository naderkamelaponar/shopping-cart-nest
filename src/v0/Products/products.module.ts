import { Module ,RequestMethod,MiddlewareConsumer} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CheckInputs } from '../utils/middlewares/products/check.inputs';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(CheckInputs)
    .forRoutes({ path: 'products', method: RequestMethod.POST });
}}
