import { Injectable } from '@angular/core';

import { Company, CompanyType, CompanyAdd } from './company';

import { COMPANIES } from './mock-companies';

import { Http, Headers } from '@angular/http';

import { Login, Token, SystemsLink } from './systems-link';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {

  constructor(private http: Http) 
  {}

     static token: Token;

  getCompanies(type: CompanyType): Promise<Company[]> {
    var systemsLink = new SystemsLink();
   

    var tokenPromise : Promise<Token>;
   
    if(!CompanyService.token 
      || CompanyService.token.expirationDate < new Date()
      || !CompanyService.token.valid)  
    {
        tokenPromise = systemsLink.getToken(this.http);
    }
    else{
      tokenPromise = Promise.resolve(CompanyService.token);
    }
    
    var tokenValue;
    var companySearch = new CompanySearchModel();

    switch(type)
    {
      case CompanyType.BillTo:
       companySearch.isBillto = true;
        case CompanyType.Consignee:
       companySearch.isConsignee = true;
        case CompanyType.Shipper:
       companySearch.isShipper = true;        
    }

     return tokenPromise.then(t => {       
                         tokenValue = t.tokenValue;  
                         CompanyService.token = t;
                         console.info('token: ' + tokenValue);
                         return this.http.post(systemsLink.companySearchUrl.replace('{0}', 'true'), 
                         JSON.stringify(companySearch),
                { headers : new Headers({'Content-Type': 'application/json', 'TMWSystemsLinkToken' : tokenValue }) })
               .toPromise()
               .then(response => response.json().data as Company[])
               .catch(this.handleError);                             
                      });   
  

    
  }

   getCompany(id: string): Promise<Company> {
    var systemsLink = new SystemsLink();
   
   
    var tokenPromise : Promise<Token>;
      
    if(!CompanyService.token 
      || CompanyService.token.expirationDate < new Date()
      || !CompanyService.token.valid)  
      {
          tokenPromise = systemsLink.getToken(this.http);
      }
      else{
        tokenPromise = Promise.resolve(CompanyService.token);
      }
    
    var tokenValue;
    var companySearch = new CompanySearchModel();

   

      return tokenPromise.then(t => {       
                          tokenValue = t.tokenValue;  
                          CompanyService.token=t;
                          console.info('token: ' + tokenValue);
                          return this.http.get(systemsLink.companyGetUrl + "/" + id, 
                  { headers : new Headers({'Content-Type': 'application/json', 'TMWSystemsLinkToken' : tokenValue }) })
                .toPromise()
                .then(response => {
                                     console.info('company raw: ' + response.json());
                                     console.info('company: ' + (response.json() as Company).companyName);
                                    return response.json() as Company})
                .catch(this.handleError);                             
                        });   
  

    
  }
 

 addCompany(company: CompanyAdd): Promise<Company> {
    var systemsLink = new SystemsLink();
     
    var tokenPromise : Promise<Token>;
      
    if(!CompanyService.token 
      || CompanyService.token.expirationDate < new Date()
      || !CompanyService.token.valid)  
      {
          tokenPromise = systemsLink.getToken(this.http);
      }
      else{
        tokenPromise = Promise.resolve(CompanyService.token);
      }
    
    var tokenValue;
    var companySearch = new CompanySearchModel();

   

      return tokenPromise.then(t => {       
                          tokenValue = t.tokenValue;  
                          CompanyService.token=t;
                          console.info('token: ' + tokenValue);
                          return this.http.post(systemsLink.companyPostUrl, 
                          JSON.stringify(company),
                  { headers : new Headers({'Content-Type': 'application/json', 'TMWSystemsLinkToken' : tokenValue }) })
                .toPromise()
                .then(response => {
                                     console.info('company raw: ' + response.json());
                                     console.info('company: ' + (response.json() as Company).companyName);
                                    return response.json() as Company})
                .catch(this.handleError);                             
                        });   
  

    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

class CompanySearchModel{

  isBillto: boolean = false;  
  isShipper: boolean = false;  
  isConsignee: boolean = false;  
  isParent: boolean = false;  
  isPort: boolean = false;  
  isSupplier: boolean = false;  
  isActive: boolean = false;  
}


