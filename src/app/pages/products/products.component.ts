import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Array<any> = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getPlatziProducts().subscribe((response:any)=>{
      console.warn(response);
      this.products = response;
    });
  }

}
