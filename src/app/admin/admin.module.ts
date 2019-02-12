import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { LogInComponent } from './login/log-in/log-in.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginCookie } from './extral-admin/common/login-cookie';
import { AdminService } from './extral-admin/api/admin.service';
import { HttpModule } from '@angular/http';
const routing: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'login', component: LoginComponent,
        children: [
          { path: 'login', component: LogInComponent },
          { path: 'forget-password', component: ForgetPasswordComponent },
        ]
      },
    ]
  },
  { path: 'menu', loadChildren: './home-admin/home-admin.module#HomeAdminModule' },
];

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    LogInComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MDBBootstrapModule.forRoot(),
    FormsModule,

    HttpModule,
  ],
  entryComponents: [
    AdminComponent
  ],
  providers: [LoginCookie, AdminService],
})
export class AdminModule { }
