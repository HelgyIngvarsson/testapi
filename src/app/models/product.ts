import { User } from "./user";

export class Product{
    _id:string;
    name:string;
    price:number;
    description:string;
    createdBy:User
}