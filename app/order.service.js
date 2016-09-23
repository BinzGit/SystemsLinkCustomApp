System.register(['@angular/core', '@angular/http', './systems-link', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1, systems_link_1;
    var OrderService, OrderSummarySearchModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (systems_link_1_1) {
                systems_link_1 = systems_link_1_1;
            },
            function (_1) {}],
        execute: function() {
            OrderService = (function () {
                function OrderService(http) {
                    this.http = http;
                }
                OrderService.prototype.getOrders = function (companyId) {
                    var _this = this;
                    var systemsLink = new systems_link_1.SystemsLink();
                    var tokenPromise;
                    if (!OrderService.token
                        || OrderService.token.expirationDate < new Date()
                        || !OrderService.token.valid) {
                        tokenPromise = systemsLink.getToken(this.http);
                    }
                    else {
                        tokenPromise = Promise.resolve(OrderService.token);
                    }
                    var tokenValue;
                    var orderSearch = new OrderSummarySearchModel();
                    console.info('order pre state');
                    return tokenPromise.then(function (t) {
                        tokenValue = t.tokenValue;
                        OrderService.token = t;
                        console.info('order token: ' + tokenValue);
                        return _this.http.post(systemsLink.orderSearchUrl.replace('{0}', companyId), JSON.stringify(orderSearch), { headers: new http_1.Headers({ 'Content-Type': 'application/json', 'TMWSystemsLinkToken': tokenValue }) })
                            .toPromise()
                            .then(function (response) { return response.json().data; })
                            .catch(_this.handleError);
                    });
                };
                OrderService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                OrderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OrderService);
                return OrderService;
            }());
            exports_1("OrderService", OrderService);
            OrderSummarySearchModel = (function () {
                function OrderSummarySearchModel() {
                    this.billTo = true;
                    this.shipper = true;
                    this.consignee = true;
                    this.consigneeName = false;
                    this.shipperName = false;
                    this.orderNumber = false;
                    this.revType1 = false;
                    this.revType2 = false;
                    this.revType3 = false;
                    this.revType4 = false;
                    this.orderSource = false;
                    this.referenceType1 = false;
                    this.referenceNumber1 = false;
                    this.status = false;
                    this.moveNumber = false;
                    this.invoiceStatus = false;
                    this.bookedBy = false;
                    this.orderBy = false;
                    this.orderByName = false;
                    this.bookingTerminal = false;
                    this.carrier = false;
                    this.tractor = false;
                    this.driver1 = false;
                    this.driver1Name = false;
                    this.driver2 = false;
                    this.driver2Name = false;
                    this.trailer = false;
                    this.trailer2 = false;
                    this.ord_hdrnumber = false;
                }
                return OrderSummarySearchModel;
            }());
        }
    }
});
//# sourceMappingURL=order.service.js.map