System.register(['@angular/core', '@angular/router', './company.service', './company', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1, company_1, forms_1;
    var CITIES, CompanyAddComponent, City;
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
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            CITIES = [
                { cityCode: 14888, name: 'ABIFF,TN' },
                { cityCode: 16603, name: 'ARLINGTON,TN' },
                { cityCode: 14799, name: 'BLUNTS LANDING,TN' },
                { cityCode: 12277, name: 'CLIFTY,TN' },
                { cityCode: 15623, name: 'FINDLAY, TN' },
                { cityCode: 13814, name: 'GAINESBORO,TN' },
                { cityCode: 15969, name: 'MCKINNON,TN' },
                { cityCode: 12675, name: 'PLEASANTVILLE,TN' }
            ];
            CompanyAddComponent = (function () {
                function CompanyAddComponent(companyService, router, formBuilder) {
                    this.companyService = companyService;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.company = new company_1.CompanyAdd();
                    this.cities = CITIES;
                    this.formErrors = {
                        'companyID': '',
                        'companyName': '',
                        'city': '',
                        'address1': ''
                    };
                    this.validationMessages = {
                        'companyID': {
                            'required': 'Company ID is required',
                        },
                        'companyName': {
                            'required': 'Company Name is required.'
                        },
                        'address1': {
                            'required': 'Address1 is required.'
                        },
                        'city': {
                            'required': 'City is required.'
                        }
                    };
                }
                CompanyAddComponent.prototype.goBack = function () {
                    window.history.back();
                };
                CompanyAddComponent.prototype.onSubmit = function () {
                    this.company = this.addCompanyForm.value;
                    this.addCompany();
                };
                CompanyAddComponent.prototype.addCompany = function () {
                    var _this = this;
                    console.info('new company city: ' + this.company.city);
                    this.companyService.addCompany(this.company)
                        .then(function (newCompany) {
                        var link = ['/company', newCompany.companyID,];
                        _this.router.navigate(link);
                    }).catch(function (error) { return _this.submitError = error; });
                };
                CompanyAddComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.addCompanyForm = this.formBuilder.group({
                        companyID: ['', forms_1.Validators.required],
                        companyName: ['', forms_1.Validators.required],
                        city: ['', forms_1.Validators.required],
                        address1: ['', forms_1.Validators.required],
                        isBillTo: false,
                        isShipper: false,
                        isConsignee: false,
                    });
                    this.addCompanyForm.valueChanges
                        .subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CompanyAddComponent.prototype.onValueChanged = function (data) {
                    if (!this.addCompanyForm) {
                        return;
                    }
                    var form = this.addCompanyForm;
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
                CompanyAddComponent = __decorate([
                    core_1.Component({
                        selector: 'my-company-detail',
                        templateUrl: 'app/templates/company-add.component.html'
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router, forms_1.FormBuilder])
                ], CompanyAddComponent);
                return CompanyAddComponent;
            }());
            exports_1("CompanyAddComponent", CompanyAddComponent);
            City = (function () {
                function City() {
                }
                return City;
            }());
        }
    }
});
//# sourceMappingURL=company-add.component.js.map