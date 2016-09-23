import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CompanyDetailComponent }     from './company-detail.component';
import { CompanyAddComponent }     from './company-add.component';
import { DashboardComponent }      from './dashboard.component';
import { routing } from './app.routing';
import { CompanyService }  from './company.service';
import { OrderService }  from './order.service';
import { OrdersComponent }   from './orders.component'
import { CompanySelectComponent }  from './company-select.component';
import { HttpModule }    from '@angular/http';

@NgModule({ 
    imports: [BrowserModule,
             routing,
             HttpModule,
             ReactiveFormsModule,
             ],
    declarations: [AppComponent,
                 DashboardComponent,
                CompanySelectComponent,
                CompanyDetailComponent,
                OrdersComponent,
                CompanyAddComponent,
                ],
    providers: [       
        CompanyService,
        OrderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }