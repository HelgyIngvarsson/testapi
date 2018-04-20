import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpService{

    public token: string;

    constructor(private http: HttpClient){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser)
        this.token = currentUser.token;
    }
      
    getProducts(){
        // return this.http.get('http://localhost:3000/api/products')
        return this.http.get('http://cryptic-atoll-60728.herokuapp.com/api/products')
    }
    getProduct(id:string){
        return this.http.get('https://cryptic-atoll-60728.herokuapp.com/api/product/'+id)
        // return this.http.get('http://localhost:3000/api/product/'+id)
    }
    login(user:User): Observable<boolean>{
        const body= {username:user.username,password:user.password}
        var auth:boolean;
        // return this.http.post('http://localhost:3000/api/auth/login',body)
        return this.http.post('http://cryptic-atoll-60728.herokuapp.com/api/auth/login',body)
        .map(data=>{auth = data["auth"];
        if(auth) {
            this.token = data["token"];
            localStorage.setItem('currentUser',JSON.stringify({ username: user.username, token:  this.token }));
            return true;
        }else{
            return false;
        }
        });
        }
}