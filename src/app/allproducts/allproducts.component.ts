import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from "../services/productservice.service";

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allProducts:any
  constructor(private prdtserv:ProductserviceService) { }
  
  ngOnInit() {
    this.getAllProducts()
  }
  getAllProducts(){
    this.prdtserv.getAllProducts().subscribe(response => {
      this.allProducts = response
      console.log(this.allProducts)
    })
  }
  
}
