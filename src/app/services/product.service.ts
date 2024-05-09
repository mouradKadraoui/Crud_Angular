import { Injectable } from '@angular/core';
import { Product } from '../components/products/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }

  addProduct(name: string, price: string, color: string) {
    const priceParsed = parseFloat(price)
    const product = { name, price : priceParsed , color };
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }


  getAllProducts() {
    return this.products;
  }


  editProduct(index: number, name: string, price: number, color: string) {
    if (index >= 0 && index< this.products.length) {
      this.products[index] = { name, price, color }
      localStorage.setItem('products', JSON.stringify(this.products))
    } else {
      throw new Error('Index intouvable');
    }
  }

  getProductByIndex(index: number): Product {
    if (index >= 0 && index < this.products.length) {
      return this.products[index];


    } else {
      throw new Error('Product intouvable');
    }

  }

  deleteProduct(index: number) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(this.products));
    } else {
      throw new Error('Index introuvable');
    }
  }





}
