import { Component, OnInit, Input } from '@angular/core';

import { Company, CompanyType } from './company';
import { CompanyService } from './company.service';

import { Router } from '@angular/router';


import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-companies',
  templateUrl: 'app/templates/company-select.component.html',
})
export class CompanySelectComponent implements OnInit {

  @Input()
  companyType: CompanyType;
  companies: Company[] = [];
  selectedCompanyId:string;
  selectCompanyForm : FormGroup;

  constructor(
  private router: Router,
  private companyService: CompanyService,
  private formBuilder: FormBuilder) {
}

billTo : CompanyType = CompanyType.BillTo;
 shipper : CompanyType = CompanyType.Shipper;
 consignee : CompanyType = CompanyType.Consignee;

  ngOnInit(): void {
    this.companyService.getCompanies(this.companyType)
      .then(companies => this.companies = companies);

       this.selectCompanyForm = this.formBuilder.group({
        companyID: ['', Validators.required]
    });

     this.selectCompanyForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged(); // (re)set validation messages now
  }

  gotoDetail(): void {
    let link = ['/company', this.selectedCompanyId];
    this.router.navigate(link);
  }

  onSubmit() {
    this.selectedCompanyId = (this.selectCompanyForm.value as formValue).companyID;
    let link = ['/company', this.selectedCompanyId];
    this.router.navigate(link);
  }

  gotoOrders(): void {
    let link = ['/company', this.selectedCompanyId, 'orders'];
    this.router.navigate(link);
  }

 onValueChanged(data?: any) {
    if (!this.selectCompanyForm) { return; }
    const form = this.selectCompanyForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

   formErrors = {
    'companyID': '',   
  };

  validationMessages = {
    'companyID': {
      'required':      'Please Select A Company',
            },
  };
}

class formValue{
  companyID: string;
}