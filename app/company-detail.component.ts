import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { CompanyService } from './company.service';

import { Company } from './company';

@Component({
  selector: 'my-company-detail',
  templateUrl: 'app/templates/company-detail.component.html'

})
export class CompanyDetailComponent implements OnInit {
constructor(
  private companyService: CompanyService,
  private route: ActivatedRoute) {
}


    @Input()
    company: Company;

    goBack(): void {
            window.history.back(); 
     }

      getDetail(companyId : string): void {
            window.history.back();
     }

      getOrders(companyId : string): void {
            window.history.back();
     }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
        let companyId = params['id'] as string;
        this.companyService.getCompany(companyId)
                .then(company => this.company = company);
    });
    
}


}