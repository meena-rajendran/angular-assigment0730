import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from "../../services/productservice.service";

@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.css']
})
export class CreateproductsComponent implements OnInit {

  constructor(private prdtserv:ProductserviceService) { }
  name:any;
  price:any;
  imgpath:any;
  statusmessage:any
  ngOnInit() {
  }
  createProducts(products){
    this.prdtserv.createProduct(products.value).subscribe(response=>{
      if(response["status"] == "success") {
        this.name = ""
        this.price = ""
        this.imgpath=""
        this.statusmessage = "Successfully inserted"
      }
      else{
        this.statusmessage = "Failed to insert"
      }
    })
  }
}
