import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { UserRowComponent } from './user-row/user-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
