import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CompanyService } from './company.service';

import { Company, CompanyAdd } from './company';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



const CITIES:City[] = [
  {cityCode:14888, name:'ABIFF,TN'},
   {cityCode:16603, name:'ARLINGTON,TN'},
    {cityCode:14799, name:'BLUNTS LANDING,TN'},
     {cityCode:12277, name:'CLIFTY,TN'},
      {cityCode:15623, name:'FINDLAY, TN'},
       {cityCode:13814, name:'GAINESBORO,TN'},
        {cityCode:15969, name:'MCKINNON,TN'},
         {cityCode:12675, name:'PLEASANTVILLE,TN'}
];

@Component({
  selector: 'my-company-detail',
  templateUrl: 'app/templates/company-add.component.html'

})

export class CompanyAddComponent implements OnInit  {
constructor(
  private companyService: CompanyService,
  private router: Router,
  private formBuilder: FormBuilder) {
}

   submitError : string;
   addCompanyForm : FormGroup;
   company: CompanyAdd = new CompanyAdd();
   cities: City[] = CITIES;

    goBack(): void {
            window.history.back(); 
     }
     
onSubmit() {
    this.company = this.addCompanyForm.value;
   
    this.addCompany();   
  }
      addCompany(): void {
            console.info('new company city: ' + this.company.city)
            this.companyService.addCompany(this.company)
            .then(newCompany => {
              let link = ['/company', newCompany.companyID,];
              this.router.navigate(link);
            }).catch(error => this.submitError = error)
           ;
      }
   
    ngOnInit() {
      this.addCompanyForm = this.formBuilder.group({
      companyID: ['', Validators.required],
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      address1: ['', Validators.required],
      isBillTo: false,
      isShipper: false,
      isConsignee: false,
    });

     this.addCompanyForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged(); // (re)set validation messages now
  }

   onValueChanged(data?: any) {
    if (!this.addCompanyForm) { return; }
    const form = this.addCompanyForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control &&  !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

   formErrors = {
    'companyID': '',
    'companyName': '',
    'city': '',
    'address1': ''
  };

  validationMessages = {
    'companyID': {
      'required':      'Company ID is required',
            },
    'companyName': {
      'required': 'Company Name is required.'
    },
    'address1': {
      'required': 'Address1 is required.'
    }    ,
    'city': {
      'required': 'City is required.'
    }
  };
}

class City{
  cityCode:number
  name:string
}



