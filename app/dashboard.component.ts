import { Component, OnInit } from '@angular/core';

import {CompanyType } from './Company';




import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.component.html',
})
export class DashboardComponent   {

 billTo : CompanyType = CompanyType.BillTo;
 shipper : CompanyType = CompanyType.Shipper;
 consignee : CompanyType = CompanyType.Consignee;


}

  
