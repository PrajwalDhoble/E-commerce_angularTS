import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResult : undefined | product[]
  constructor(private activateRoute:ActivatedRoute, private product : ProductService){}

  ngOnInit(): void {
    let query = this.activateRoute.snapshot.paramMap.get('query')
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult = result
    })
  }
}
