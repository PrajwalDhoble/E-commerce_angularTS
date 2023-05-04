import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  popularProducts : undefined | product[]

  constructor(private product:ProductService){}

  ngOnInit(): void{
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts = data
    });
  }

}
