import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  product! : Product
  productIndex : number | null = null ;
constructor(private route : ActivatedRoute,
            private productService : ProductService,
            private router : Router){}

 ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('index');
  if (idParam) {
    this.productIndex = parseFloat(idParam);
    this.product = this.productService.getProductByIndex(this.productIndex);

  }
  console.log(idParam);

 }

editProduct(): void {
  if (this.productIndex !== null && this.product) {
    this.productService.editProduct(
      this.productIndex,
      this.product.name,
      this.product.price,
      this.product.color
    );
    this.router.navigate(['/products'])
  } else {
    console.error('produit introuvable')
  }
}

}





