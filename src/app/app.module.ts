import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ProductsComponent }   from './products.component';
import { NewProductComponent }   from './newProduct.component';
import { ProductComponent }   from './product.component';
import { LoginComponent }   from './login.component';
import { SharedService } from './shared.service';
import { AuthGuardService } from './auth.guard';

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

const appRoutes: Routes =[
    { path: 'products', component: ProductsComponent},
    { path: 'product/new', component: NewProductComponent,canActivate:[AuthGuardService], pathMatch:'full'},
    { path: 'product/:id', component: ProductComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo:'/products', pathMatch:'full'}

];

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent,ProductsComponent,ProductComponent,LoginComponent,NewProductComponent],
    bootstrap:    [ AppComponent ],
    providers:    [ SharedService,AuthGuardService ]
})
export class AppModule { }