import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
