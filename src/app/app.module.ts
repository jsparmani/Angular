import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'findbyage', component: SearchCustomersComponent },
      { path: 'add', component: CreateCustomerComponent },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }