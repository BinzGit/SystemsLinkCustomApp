System.register(['@angular/core', '@angular/router', './company.service', './company'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1, company_1;
    var CompanyDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (company_1_1) {
                company_1 = company_1_1;
            }],
        execute: function() {
            CompanyDetailComponent = (function () {
                function CompanyDetailComponent(companyService, route) {
                    this.companyService = companyService;
                    this.route = route;
                }
                CompanyDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                CompanyDetailComponent.prototype.getDetail = function (companyId) {
                    window.history.back();
                };
                CompanyDetailComponent.prototype.getOrders = function (companyId) {
                    window.history.back();
                };
                CompanyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var companyId = params['id'];
                        _this.companyService.getCompany(companyId)
                            .then(function (company) { return _this.company = company; });
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', company_1.Company)
                ], CompanyDetailComponent.prototype, "company", void 0);
                CompanyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-company-detail',
                        templateUrl: 'app/templates/company-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.ActivatedRoute])
                ], CompanyDetailComponent);
                return CompanyDetailComponent;
            }());
            exports_1("CompanyDetailComponent", CompanyDetailComponent);
        }
    }
});
//# sourceMappingURL=company-detail.component.js.map