System.register(['@angular/core', './company', './company.service', '@angular/router', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, company_1, company_service_1, router_1, forms_1;
    var CompanySelectComponent, formValue;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (company_1_1) {
                company_1 = company_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            CompanySelectComponent = (function () {
                function CompanySelectComponent(router, companyService, formBuilder) {
                    this.router = router;
                    this.companyService = companyService;
                    this.formBuilder = formBuilder;
                    this.companies = [];
                    this.billTo = company_1.CompanyType.BillTo;
                    this.shipper = company_1.CompanyType.Shipper;
                    this.consignee = company_1.CompanyType.Consignee;
                    this.formErrors = {
                        'companyID': '',
                    };
                    this.validationMessages = {
                        'companyID': {
                            'required': 'Please Select A Company',
                        },
                    };
                }
                CompanySelectComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.companyService.getCompanies(this.companyType)
                        .then(function (companies) { return _this.companies = companies; });
                    this.selectCompanyForm = this.formBuilder.group({
                        companyID: ['', forms_1.Validators.required]
                    });
                    this.selectCompanyForm.valueChanges
                        .subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CompanySelectComponent.prototype.gotoDetail = function () {
                    var link = ['/company', this.selectedCompanyId];
                    this.router.navigate(link);
                };
                CompanySelectComponent.prototype.onSubmit = function () {
                    this.selectedCompanyId = this.selectCompanyForm.value.companyID;
                    var link = ['/company', this.selectedCompanyId];
                    this.router.navigate(link);
                };
                CompanySelectComponent.prototype.gotoOrders = function () {
                    var link = ['/company', this.selectedCompanyId, 'orders'];
                    this.router.navigate(link);
                };
                CompanySelectComponent.prototype.onValueChanged = function (data) {
                    if (!this.selectCompanyForm) {
                        return;
                    }
                    var form = this.selectCompanyForm;
                    for (var field in this.formErrors) {
                        // clear previous error message (if any)
                        this.formErrors[field] = '';
                        var control = form.get(field);
                        if (control && !control.valid) {
                            var messages = this.validationMessages[field];
                            for (var key in control.errors) {
                                this.formErrors[field] += messages[key] + ' ';
                            }
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CompanySelectComponent.prototype, "companyType", void 0);
                CompanySelectComponent = __decorate([
                    core_1.Component({
                        selector: 'my-companies',
                        templateUrl: 'app/templates/company-select.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, company_service_1.CompanyService, forms_1.FormBuilder])
                ], CompanySelectComponent);
                return CompanySelectComponent;
            }());
            exports_1("CompanySelectComponent", CompanySelectComponent);
            formValue = (function () {
                function formValue() {
                }
                return formValue;
            }());
        }
    }
});
//# sourceMappingURL=company-select.component.js.map