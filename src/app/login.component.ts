import { Component, style } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpService} from './http.service';
import { User } from './models/user';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    template:`<div class="container">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <h2>SignIn</h2>
            <div class="form-group">
                <label>Login:</label>
                <input type="text" name="username" [(ngModel)]="user.username" style="width:100%">
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" name="password" [(ngModel)]="user.password" style="width:100%">
            </div>
            <button class="btn btn-default" (click)="login(user)">LogIn</button>
        </div>
        <div class="col-md-2">
        </div>
    </div>
</div>`,
providers: [HttpService]
})
export class LoginComponent { 
    user:User = new User();
    constructor(private router: Router,private httpService: HttpService,private sharedService: SharedService){}

    login(user:User){
        this.httpService.login(user).subscribe(result=>{
            if(result){
            this.sharedService.IsUserLoggedIn.next(true) 
            this.router.navigateByUrl("/")
        }else{
            console.log("false")
        }})
    }
}