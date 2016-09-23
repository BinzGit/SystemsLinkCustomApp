System.register(['@angular/core', './company', '@angular/http', './systems-link', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, company_1, http_1, systems_link_1;
    var CompanyService, CompanySearchModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (company_1_1) {
                company_1 = company_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (systems_link_1_1) {
                systems_link_1 = systems_link_1_1;
            },
            function (_1) {}],
        execute: function() {
            CompanyService = (function () {
                function CompanyService(http) {
                    this.http = http;
                }
                CompanyService.prototype.getCompanies = function (type) {
                    var _this = this;
                    var systemsLink = new systems_link_1.SystemsLink();
                    var tokenPromise;
                    if (!CompanyService.token
                        || CompanyService.token.expirationDate < new Date()
                        || !CompanyService.token.valid) {
                        tokenPromise = systemsLink.getToken(this.http);
                    }
                    else {
                        tokenPromise = Promise.resolve(CompanyService.token);
                    }
                    var tokenValue;
                    var companySearch = new CompanySearchModel();
                    switch (type) {
                        case company_1.CompanyType.BillTo:
                            companySearch.isBillto = true;
                        case company_1.CompanyType.Consignee:
                            companySearch.isConsignee = true;
                        case company_1.CompanyType.Shipper:
                            companySearch.isShipper = true;
                    }
                    return tokenPromise.then(function (t) {
                        tokenValue = t.tokenValue;
                        CompanyService.token = t;
                        console.info('token: ' + tokenValue);
                        return _this.http.post(systemsLink.companySearchUrl.replace('{0}', 'true'), JSON.stringify(companySearch), { headers: new http_1.Headers({ 'Content-Type': 'application/json', 'TMWSystemsLinkToken': tokenValue }) })
                            .toPromise()
                            .then(function (response) { return response.json().data; })
                            .catch(_this.handleError);
                    });
                };
                CompanyService.prototype.getCompany = function (id) {
                    var _this = this;
                    var systemsLink = new systems_link_1.SystemsLink();
                    var tokenPromise;
                    if (!CompanyService.token
                        || CompanyService.token.expirationDate < new Date()
                        || !CompanyService.token.valid) {
                        tokenPromise = systemsLink.getToken(this.http);
                    }
                    else {
                        tokenPromise = Promise.resolve(CompanyService.token);
                    }
                    var tokenValue;
                    var companySearch = new CompanySearchModel();
                    return tokenPromise.then(function (t) {
                        tokenValue = t.tokenValue;
                        CompanyService.token = t;
                        console.info('token: ' + tokenValue);
                        return _this.http.get(systemsLink.companyGetUrl + "/" + id, { headers: new http_1.Headers({ 'Content-Type': 'application/json', 'TMWSystemsLinkToken': tokenValue }) })
                            .toPromise()
                            .then(function (response) {
                            console.info('company raw: ' + response.json());
                            console.info('company: ' + response.json().companyName);
                            return response.json();
                        })
                            .catch(_this.handleError);
                    });
                };
                CompanyService.prototype.addCompany = function (company) {
                    var _this = this;
                    var systemsLink = new systems_link_1.SystemsLink();
                    var tokenPromise;
                    if (!CompanyService.token
                        || CompanyService.token.expirationDate < new Date()
                        || !CompanyService.token.valid) {
                        tokenPromise = systemsLink.getToken(this.http);
                    }
                    else {
                        tokenPromise = Promise.resolve(CompanyService.token);
                    }
                    var tokenValue;
                    var companySearch = new CompanySearchModel();
                    return tokenPromise.then(function (t) {
                        tokenValue = t.tokenValue;
                        CompanyService.token = t;
                        console.info('token: ' + tokenValue);
                        return _this.http.post(systemsLink.companyPostUrl, JSON.stringify(company), { headers: new http_1.Headers({ 'Content-Type': 'application/json', 'TMWSystemsLinkToken': tokenValue }) })
                            .toPromise()
                            .then(function (response) {
                            console.info('company raw: ' + response.json());
                            console.info('company: ' + response.json().companyName);
                            return response.json();
                        })
                            .catch(_this.handleError);
                    });
                };
                CompanyService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
            CompanySearchModel = (function () {
                function CompanySearchModel() {
                    this.isBillto = false;
                    this.isShipper = false;
                    this.isConsignee = false;
                    this.isParent = false;
                    this.isPort = false;
                    this.isSupplier = false;
                    this.isActive = false;
                }
                return CompanySearchModel;
            }());
        }
    }
});
//# sourceMappingURL=company.service.js.map