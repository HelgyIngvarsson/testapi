import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ProductsComponent }   from './products.component';
import { ProductComponent }   from './product.component';
import { LoginComponent }   from './login.component';
import { SharedService } from './shared.service';

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
const appRoutes: Routes =[
    { path: 'products', component: ProductsComponent},
    { path: 'product/:id', component: ProductsComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo:'/products', pathMatch:'full'}

];

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent,ProductsComponent,ProductComponent,LoginComponent],
    bootstrap:    [ AppComponent ],
    providers:    [SharedService]
})
export class AppModule { }