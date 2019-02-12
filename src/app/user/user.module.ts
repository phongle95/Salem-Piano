import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
// import { HomeUserModule } from './home-user/home-user.module';

import { LoginCookie } from '../admin/extral-admin/common/login-cookie';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { MenuComponent } from './trang-chu/menu/menu.component';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { TrangKhacModule } from './trang-khac/trang-khac.module'

const routing: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'trang-chu', loadChildren: './trang-chu/trang-chu.module#TrangChuModule' },
      { path: 'trang-khac', loadChildren: './trang-khac/trang-khac.module#TrangKhacModule' },
    ],
  }, 
];

@NgModule({
  declarations: [
    UserComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    FormsModule,
  ],
  entryComponents: [
    UserComponent,  
  ],
  providers: [LoginCookie],
})
export class UserModule { }
