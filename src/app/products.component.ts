import { Component, style } from '@angular/core';

import { HttpService} from './http.service';
import { Product } from './models/product';

@Component({
    selector: 'products',
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
          <tr *ngFor="let product of products">
            <td><a [routerLink]="['/product',product?._id]">{{product?._id}}</a></td>
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
export class ProductsComponent { 
    constructor(private httpService: HttpService){}
    products:Product[] =[]

    ngOnInit(): void {
        this.httpService.getProducts().subscribe((data:Product[]) => this.products = data)
    }
}