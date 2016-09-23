System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Company, CompanyAdd, CompanyType;
    return {
        setters:[],
        execute: function() {
            Company = (function () {
                function Company() {
                    this.isBillTo = false;
                    this.isShipTo = false;
                    this.isConsignee = false;
                    this.address1 = '';
                    this.city = '';
                    this.cityName = '';
                    this.state = '';
                    this.zip = '';
                }
                return Company;
            }());
            exports_1("Company", Company);
            CompanyAdd = (function () {
                function CompanyAdd() {
                    this.isBillTo = false;
                    this.isShipper = false;
                    this.isConsignee = false;
                    this.city = 0;
                }
                return CompanyAdd;
            }());
            exports_1("CompanyAdd", CompanyAdd);
            (function (CompanyType) {
                CompanyType[CompanyType["BillTo"] = 0] = "BillTo";
                CompanyType[CompanyType["Consignee"] = 1] = "Consignee";
                CompanyType[CompanyType["Shipper"] = 2] = "Shipper";
            })(CompanyType || (CompanyType = {}));
            exports_1("CompanyType", CompanyType);
        }
    }
});
//# sourceMappingURL=company.js.map