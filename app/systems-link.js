System.register(['@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var USER_ID, PASSWORD, HOST, APP_DIR, TOKEN_URL, COMPAY_SEARCH_URL, ORDER_SEARCH_URL, COMPAY_GET_URL, COMPAY_POST_URL, SystemsLink, Login, Token;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            USER_ID = 'UG';
            PASSWORD = 'UG';
            HOST = 'MAY-BBINZLEY';
            APP_DIR = '/SystemsLink.Restful';
            TOKEN_URL = '';
            COMPAY_SEARCH_URL = '';
            ORDER_SEARCH_URL = '';
            COMPAY_GET_URL = '';
            COMPAY_POST_URL = '';
            SystemsLink = (function () {
                function SystemsLink() {
                    this.host = HOST;
                    this.tokenUrl = 'http://' + HOST + APP_DIR + TOKEN_URL;
                    this.companySearchUrl = 'http://' + HOST + APP_DIR + COMPAY_SEARCH_URL;
                    this.companyGetUrl = 'http://' + HOST + APP_DIR + COMPAY_GET_URL;
                    this.companyPostUrl = 'http://' + HOST + APP_DIR + COMPAY_GET_URL;
                    this.orderSearchUrl = 'http://' + HOST + APP_DIR + ORDER_SEARCH_URL;
                    this.login = new Login(USER_ID, PASSWORD);
                }
                SystemsLink.prototype.getToken = function (http) {
                    return http.post(this.tokenUrl, JSON.stringify(this.login), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
                        .toPromise()
                        .then(function (response) {
                        console.info('token raw: ' + response.json());
                        return response.json();
                    })
                        .catch(this.handleError);
                };
                SystemsLink.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                return SystemsLink;
            }());
            exports_1("SystemsLink", SystemsLink);
            Login = (function () {
                function Login(uid, pwd) {
                    this.username = uid;
                    this.password = pwd;
                }
                return Login;
            }());
            exports_1("Login", Login);
            Token = (function () {
                function Token() {
                }
                return Token;
            }());
            exports_1("Token", Token);
        }
    }
});
//# sourceMappingURL=systems-link.js.map