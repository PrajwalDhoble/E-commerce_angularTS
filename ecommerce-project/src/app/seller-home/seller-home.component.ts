import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {
  productList : undefined | product[]
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result
    })
  }
}
