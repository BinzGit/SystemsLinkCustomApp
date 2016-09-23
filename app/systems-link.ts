
 import { Http, Headers } from '@angular/http';
 
 const USER_ID: string =  'UG';
 const PASSWORD: string =  'UG';
 const HOST: string =  'MAY-BBINZLEY';
 const APP_DIR: string =  '/SystemsLink.Restful';
 const TOKEN_URL: string =  '';
 const COMPAY_SEARCH_URL: string =  '';
 const ORDER_SEARCH_URL: string =  '';
 const COMPAY_GET_URL: string =  '';
 const COMPAY_POST_URL: string =  '';

export class SystemsLink 
{
    host: string = HOST;
    tokenUrl: string = 'http://' + HOST + APP_DIR + TOKEN_URL;
    companySearchUrl: string = 'http://' + HOST + APP_DIR + COMPAY_SEARCH_URL;
    companyGetUrl: string = 'http://' + HOST + APP_DIR + COMPAY_GET_URL;
    companyPostUrl: string = 'http://' + HOST + APP_DIR + COMPAY_GET_URL;
    orderSearchUrl: string = 'http://' + HOST + APP_DIR + ORDER_SEARCH_URL;
    login:Login = new Login(USER_ID, PASSWORD);

     getToken(http: Http) : Promise<Token>
  {
    return http.post( this.tokenUrl, 
                      JSON.stringify(this.login),
                      { headers : new Headers({'Content-Type': 'application/json'}) })
                      .toPromise()
                      .then(response => {
                                    console.info('token raw: ' + response.json());
                                    return response.json() as Token
                                           } )
               .catch(this.handleError);
  }
      
      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
export class Login{
  constructor(uid : string, pwd:string ){
    this.username = uid;
    this.password = pwd;
  }
  username :string;
  password :string;
}

export class Token{
 
  tokenValue :string;
  valid :boolean;
  expirationDate: Date;
}



