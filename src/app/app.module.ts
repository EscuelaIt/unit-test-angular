import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { UserRowComponent } from './user-row/user-row.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormSkuComponent } from './form-sku/form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent,
    UsersListComponent,
    FormSkuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
