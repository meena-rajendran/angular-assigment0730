import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get("http://localhost:1234/getAllProducts")
  }
  createProduct(requestBody){
    return this.http.post("http://localhost:1234/createProduct", requestBody)
  }
}
