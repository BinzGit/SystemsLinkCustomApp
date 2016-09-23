System.register(['@angular/core', '@angular/router', './order.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, order_service_1;
    var OrdersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            }],
        execute: function() {
            OrdersComponent = (function () {
                function OrdersComponent(route, orderService) {
                    this.route = route;
                    this.orderService = orderService;
                    this.title = 'Orders';
                }
                OrdersComponent.prototype.onSelect = function (order) {
                    this.selectedOrder = order;
                };
                OrdersComponent.prototype.getOrders = function (companyId) {
                    var _this = this;
                    this.orderService.getOrders(companyId).then(function (orders) { return _this.orders = orders; });
                };
                OrdersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var companyId = params['id'];
                        _this.getOrders(companyId);
                    });
                };
                OrdersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-orders',
                        templateUrl: 'app/templates/orders.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, order_service_1.OrderService])
                ], OrdersComponent);
                return OrdersComponent;
            }());
            exports_1("OrdersComponent", OrdersComponent);
        }
    }
});
//# sourceMappingURL=orders.component.js.map