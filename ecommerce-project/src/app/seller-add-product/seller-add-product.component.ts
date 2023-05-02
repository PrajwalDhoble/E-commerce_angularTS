import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent {

  constructor( private product : ProductService) { }

  ngOnInit(): void {

  }

  submit(data: product) {
    this.product.addProduct(data).subscribe(()=>{
      
    })
  }
}
