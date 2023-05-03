import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent {
  productData: undefined | product
  productMessage : undefined | string
  constructor(private route: ActivatedRoute, private product: ProductService, private router : Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.warn(data)
      this.productData = data
    })
  }

  submit(data: product) {
    if(this.productData){
      data.id =this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
        if(result){
          this.productMessage="Product Updated Successfully, redirecting...."
        }
    })
    setTimeout(()=>{
      this.productMessage = undefined
      this.router.navigate(['seller-home'])
    }, 3000)
    
  }
}