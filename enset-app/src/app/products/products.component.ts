import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products:Array <Product>=[];
  public keyword : string="";
  constructor(private productService:ProductService) {
  }
  ngOnInit() {
      this.getProducts()
  }
  getProducts() {

    this.productService.getProducts(1, 2)
      .subscribe(
        {
          next:value => {

          },
          error:err => {
                 console.log(err)
          }
        }
      )


   /*  this.products=this.productService.getProducts()*/
  }



  handleCheckProduct(product : Product){
    this.productService.checkProducts(product).subscribe({
      next :updateProduct =>{
        product.checked=!product.checked;
        //this.getProducts()
        }
    })

  }
  handleDelete(product: Product){
    if(confirm("Are you sure ?"))
   this.productService.deleteProducts(product).subscribe({
     next: value => {
     //  this.getProducts();
       this.products=this.products.filter(p=>p.id!=product.id)
     }

   })
  }
  searchProducts(){
    this.productService.searchProducts(this.keyword).subscribe({
      next: value => {
        this.products=value;
      }
    })
  }

}
