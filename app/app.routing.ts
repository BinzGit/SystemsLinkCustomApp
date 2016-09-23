import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyDetailComponent }      from './company-detail.component';
import { CompanyAddComponent }      from './company-add.component';
import { OrdersComponent }      from './orders.component';

import { DashboardComponent }      from './dashboard.component';

const appRoutes: Routes = [
   {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
 },
 {
  path: 'company/:id',
  component: CompanyDetailComponent
},
{
  path: 'company/:id/orders',
  component: OrdersComponent
},
{
  path: 'add/company',
  component: CompanyAddComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

