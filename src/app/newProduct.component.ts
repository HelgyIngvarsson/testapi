import { Component, style } from '@angular/core';

import { HttpService} from './http.service';
import { Product } from './models/product';
import {Router} from '@angular/router';

@Component({
    selector: 'new-product',
    template:`<div class="container">
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <h2>Create new product</h2>
        <div class="form-group">
            <label>Name:</label>
            <input type="text" name="name" [(ngModel)]="product.name" style="width:100%">
        </div>
        <div class="form-group">
            <label>Price:</label>
            <input type="number" name="price" [(ngModel)]="product.price" style="width:100%">
        </div>
        <div class="form-group">
            <label>Description:</label>
            <input type="text" name="description" [(ngModel)]="product.description" style="width:100%">
        </div>
        <button class="btn btn-default" (click)="create(product)">Create</button>
    </div>
    <div class="col-md-2">
    </div>
</div>
</div>`,
providers: [HttpService]
})
export class NewProductComponent { 
    constructor(private router: Router,private httpService: HttpService){}

    product:Product = new Product();

    create(product:Product){
      this.httpService.createProduct(product)
      .subscribe(res=>{
        if(res){
          this.router.navigateByUrl("/");
        }else{
          console.log(false)
        }
      })
    }
}