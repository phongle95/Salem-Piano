import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

//https://www.npmjs.com/package/@kolkov/angular-editor
import { AngularEditorModule } from '@kolkov/angular-editor';
//https://www.npmjs.com/package/ngx-cookie-service
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//https://github.com/aitboudad/ngx-loading-bar
// for Http import LoadingBarHttpModule:
// import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PianoService } from './api/piano.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpModule,

    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    LoadingBarRouterModule,
    // LoadingBarHttpModule,
    AngularEditorModule,
  ],
  providers: [CookieService, PianoService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
