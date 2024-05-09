import { Component, Input, OnInit } from '@angular/core';
import { Product } from './components/products/products.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'routage';
  products : Product[]=[]
  @Input() produits : Product[]=[]

  ngOnInit(): void {
    this.produits = this.productService.getAllProducts()
  }

  constructor(private productService : ProductService){}



}
