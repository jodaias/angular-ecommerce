import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    standalone: true,
    imports: [RouterLink, CurrencyPipe]
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private cartService: CartService,
              @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    const theProductId: string = this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  addToCart() {

    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
    let theCartItem = new CartItem(this.product.id, this.product.name, this.product.imageUrl, this.product.unitPrice);

    this.cartService.addToCart(theCartItem);

  }

}
