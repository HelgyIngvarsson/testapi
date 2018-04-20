import { Component, style } from '@angular/core';

import { HttpService} from './http.service';
import { Product } from './models/product';
import {Subscription} from 'rxjs/Subscription';
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product',
    template:`<div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Desc</th>
            <th scope="col">CreatedBy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{product?._id}}</td>
            <td>{{product?.name}}</td>
            <td>{{product?.price}}</td>
            <td>{{product?.description}}</td>
            <td>{{product?.createdBy.username}}</td>
          </tr>          
        </tbody>
      </table>
</div>`,
providers: [HttpService]
})
export class ProductComponent { 
    private id:string;
    private subscription: Subscription;
    constructor(private httpService: HttpService,private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    product:Product = new Product();

    ngOnInit(): void {
        this.httpService.getProduct(this.id).subscribe((data:Product) => this.product = data)
    }
}