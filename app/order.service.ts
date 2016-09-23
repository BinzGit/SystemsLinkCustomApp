import { Injectable } from '@angular/core';
import { OrderSummary } from './order';
import { Http, Headers } from '@angular/http';
import { Login, Token, SystemsLink } from './systems-link';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

  constructor(private http: Http) 
  {}

     static token: Token;

  getOrders(companyId: string): Promise<OrderSummary[]> {
    var systemsLink = new SystemsLink();   

    var tokenPromise : Promise<Token>;       

    if(!OrderService.token 
      || OrderService.token.expirationDate < new Date()
      || !OrderService.token.valid)  
    {
        tokenPromise = systemsLink.getToken(this.http);
    }
    else{
      tokenPromise = Promise.resolve(OrderService.token);
    }
    
    var tokenValue;
    var orderSearch = new OrderSummarySearchModel();
    
    console.info('order pre state');
     return tokenPromise.then(t => {       
                                    tokenValue = t.tokenValue; 
                                    OrderService.token = t; 
                                    console.info('order token: ' + tokenValue);
                                    return this.http.post(systemsLink.orderSearchUrl.replace('{0}', companyId), 
                                                          JSON.stringify(orderSearch),
                                                          { headers : new Headers({'Content-Type': 'application/json', 'TMWSystemsLinkToken' : tokenValue }) })
                                                        .toPromise()
                                                        .then(response => response.json().data as OrderSummary[])
                                                        .catch(this.handleError);                             
                                   });   
  

    
  }

     

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

class OrderSummarySearchModel
{  
        billTo: boolean = true;
        shipper: boolean = true;
        consignee: boolean = true;
        consigneeName: boolean = false;
        shipperName: boolean = false;
        orderNumber: boolean = false;
        revType1: boolean = false;
        revType2: boolean = false;
        revType3: boolean = false;
        revType4: boolean = false;
        orderSource: boolean = false;
        referenceType1: boolean = false;
        referenceNumber1: boolean = false;
        status: boolean = false;
        moveNumber: boolean = false;
        invoiceStatus: boolean = false;
        bookedBy: boolean = false;
        orderBy: boolean = false;
        orderByName: boolean = false;
        bookingTerminal: boolean = false;
        carrier: boolean = false;      
        tractor: boolean = false;
        driver1: boolean = false;
        driver1Name: boolean = false;
        driver2: boolean = false;
        driver2Name: boolean = false;
        trailer: boolean = false;
        trailer2: boolean = false;
        ord_hdrnumber: boolean = false;
                
}


