import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public getProducts(page : number=1, size: number=4): Observable<Array<Product>>{
   return this.http.get<Array<Product>>(`http://localhost:8089/products?_page=${page}&_limit=${size}`);
  }
  public checkProducts(product:Product): Observable<any>{
    return this.http.patch<Product>('http://localhost:8089/products/"${products.id}',
      {checked:!product.checked});
  }
  public deleteProducts(product:Product){
    return this.http.delete<any>('http://localhost:8089/products/"${products.id}',);
  }
    saveProduct(product:Product){
      return this.http.post<Product>('http://localhost:8089/products',
        product);
    }
  public searchProducts(keyword:string){
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  }
}
