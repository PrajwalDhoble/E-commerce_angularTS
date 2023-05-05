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
  productData : undefined | product
  constructor( private activeRoute : ActivatedRoute , private product : ProductService) {}

  ngOnInit() : void{
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData = result
    })
  }
}
