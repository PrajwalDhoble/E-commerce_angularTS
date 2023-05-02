import { Component } from '@angular/core';
import { of } from 'rxjs';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {
  productList: undefined | product[]
  productMessage: undefined | string
  icon = faTrash
  constructor(private product: ProductService) { }

  ngOnInit(): void {
   this.list()
  }

  deleteProduct(id: number) {
    console.warn("test id", id)
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product Deleted Successfully"
        this.list()
      }
    })
    setTimeout(() => {
      this.productMessage = undefined
    }, 3000)
  }

  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result)
      if (result) {
        this.productList = result
      }
    })
  }
}
