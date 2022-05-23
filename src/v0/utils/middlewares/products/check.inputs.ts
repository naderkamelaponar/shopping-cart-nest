import { Injectable,NestMiddleware } from "@nestjs/common";
import { Request,Response,NextFunction } from "express"
@Injectable()
export class CheckInputs implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
        const {title,description,price}=req.body
        if (!title || !description || !price){
            return (res.status(400).send({Error:"Missing Inputs"}))
        }
        next()
    }
}