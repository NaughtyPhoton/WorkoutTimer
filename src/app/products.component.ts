import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: '/products.component.html'
})
export class ProductsComponent {
  productName = 'My 1st product';
  isDisabled = false;
  productList = ['A Book', 'A Tree']

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  onAddProduct() {
    this.productList.push(this.productName)
  }
}
