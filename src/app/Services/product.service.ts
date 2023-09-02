import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://young-sands-07814.herokuapp.com/api/products');
  }
  getPlatziProducts(){
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }
}
