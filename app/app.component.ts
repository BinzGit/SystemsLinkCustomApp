import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <div class="container">
      <div class="row">
        <h1>{{title}}</h1>
      </div>
      <div class="row">
        <nav class="navbar navbar-default">
          <div class="row">
            <div class="col-md-4">
              <ul class="nav navbar-nav">
              <li>
                <a routerLink="/dashboard">Company Lookup</a>
              </li>
              <li>
                <a routerLink="/add/company">Add Company</a>
              </li>
              </ul>
              </div>
           </div>
        </nav>
        
      </div>
      <router-outlet></router-outlet>
   </div>
  `
})
export class AppComponent  {
  title = 'Company Time';
}