import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderSummary } from './order';

import { OrderService } from './order.service';


@Component({
    selector: 'my-orders',
    templateUrl: 'app/templates/orders.component.html'

})
export class OrdersComponent implements OnInit {
    constructor(
  private route: ActivatedRoute,
  private orderService: OrderService) {
}
  title = 'Orders';
  selectedOrder: OrderSummary;
  orders : OrderSummary[];
 
  onSelect(order: OrderSummary): void {
  this.selectedOrder = order;
 
    }

    getOrders(companyId: string): void {
     this.orderService.getOrders(companyId).then(orders => this.orders = orders);
  }   
  
  ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
        let companyId = params['id'] as string;
        this.getOrders(companyId);
          });
    
  }   
}







