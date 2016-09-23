export class Company {
  companyID: string;
  companyName: string;
  isBillTo:boolean= false;
  isShipTo:boolean= false;
  isConsignee: boolean = false;
  address1: string = '';
  city:string= '';
  cityName:string = '';
  state:string= '';
  zip:string= '';
}

export class CompanyAdd {
  companyID: string;
  companyName: string;
  isBillTo:boolean= false;
  isShipper:boolean= false;
  isConsignee: boolean = false;
  city:number= 0; 
}

export enum CompanyType{
    BillTo, Consignee, Shipper
}