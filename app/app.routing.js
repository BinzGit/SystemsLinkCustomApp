System.register(['@angular/router', './company-detail.component', './company-add.component', './orders.component', './dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, company_detail_component_1, company_add_component_1, orders_component_1, dashboard_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_detail_component_1_1) {
                company_detail_component_1 = company_detail_component_1_1;
            },
            function (company_add_component_1_1) {
                company_add_component_1 = company_add_component_1_1;
            },
            function (orders_component_1_1) {
                orders_component_1 = orders_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'company/:id',
                    component: company_detail_component_1.CompanyDetailComponent
                },
                {
                    path: 'company/:id/orders',
                    component: orders_component_1.OrdersComponent
                },
                {
                    path: 'add/company',
                    component: company_add_component_1.CompanyAddComponent
                },
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map