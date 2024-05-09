import { Component} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {


  constructor(private productService : ProductService,private router : Router){}

  addProduct(name : string , price : string , color : string ){
  this.productService.addProduct(name,price,color)
  this.router.navigate(['/products'])
  }

}
