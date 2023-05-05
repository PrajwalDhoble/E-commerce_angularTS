import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productQuantity : number = 1
  quantity:number = 1 
  productData : undefined | product
  constructor( private activeRoute : ActivatedRoute , private product : ProductService) {}

  ngOnInit() : void{
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData = result
    })
  }

  handleQuantity(val : string){
    if(this.productQuantity < 20 && val === 'plus'){
      this.productQuantity += 1
    }
    else if(this.productQuantity > 1 && val === 'min'){
      this.productQuantity -= 1
    }
  }
}
