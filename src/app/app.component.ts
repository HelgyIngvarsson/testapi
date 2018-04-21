import { Component, style } from '@angular/core';

import { SharedService } from './shared.service';
import { HttpService} from './http.service';

@Component({
    selector: 'index',
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="nav-content">   
    <ul class="nav navbar-nav" id="menu">
    <li class="nav-item">
    <a class="nav-link" routerLink="products">Products</a>
    </li>
    <li *ngIf="isUserLoggedIn" class="nav-item">
    <a class="nav-link" routerLink="product/new">New Product</a>
    </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
    <li *ngIf="!isUserLoggedIn" class="nav-item"><a class="nav-link" routerLink="login">LogIn</a></li>
    <li *ngIf="isUserLoggedIn" class="nav-item"><a class="nav-link" href="#" (click)="logout()">LogOut</a></li>
    </ul>
    </div>
    </nav>
    <div class="container-fluid">
    <router-outlet></router-outlet>
    </div>`,
    providers: [HttpService]
})
export class AppComponent { 
    isUserLoggedIn: boolean;

    constructor(private sharedService: SharedService,private httpService: HttpService) {
        this.sharedService.IsUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    }

    ngOnInit(): void {
        if(localStorage.getItem("currentUser")){
            this.sharedService.IsUserLoggedIn.next(true)
        }
    }

    logout(){
        this.sharedService.IsUserLoggedIn.next(false);   
        this.httpService.logout();
        }
}