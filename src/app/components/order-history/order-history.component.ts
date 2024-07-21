import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../../common/order-history';
import { OrderHistoryService } from '../../services/order-history.service';
import { NgIf, NgFor, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-order-history',
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, CurrencyPipe, DatePipe]
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  generateRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
  }

  handleOrderHistory() {

    const theEmail = JSON.parse(this.storage.getItem('userEmail')!) ?? `customer${this.generateRandomNumber()}@example.com`;

    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
      }
    );
  }

}
