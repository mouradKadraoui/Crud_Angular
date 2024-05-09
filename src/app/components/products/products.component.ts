import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product} from './products.model';
import { ProductService } from '../../services/product.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products : Product[] =[]


  ngOnInit(): void {
  this.products = this.productService.getAllProducts()
  console.log(this.products);

  }
  constructor(private productService : ProductService , private router : Router){}

  editProduct(index: number): void {
    this.router.navigate(['/edit', index]);
  }

  delete(index : number){
    this.productService.deleteProduct(index)
    this.productService.getAllProducts()
  }

  }
