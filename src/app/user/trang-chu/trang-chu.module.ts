import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu/menu.component';
import { SlideComponent } from './slide/slide.component';
import { UyTinComponent } from './uy-tin/uy-tin.component';
import { SanPhamNoiBatComponent } from './san-pham-noi-bat/san-pham-noi-bat.component';
import { SanPhamBanChayComponent } from './san-pham-ban-chay/san-pham-ban-chay.component';
import { TatCaSanPhamComponent } from './tat-ca-san-pham/tat-ca-san-pham.component';
import { DanhGiaKhachComponent } from './danh-gia-khach/danh-gia-khach.component';
import { FooterComponent } from './footer/footer.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { VideoComponent } from './video/video.component'; 

const routing: Routes = [{
  path: '', component: TrangChuComponent,
  children: [
    // {
    //   path: 'quan-ly-nhap-diem/:khoi', component: QuanLyNhapDiemComponent
    // },
    // { path: 'cai-dat-cot-diem/:khoi', component: CaiDatCotDiemComponent },
    // { path: 'quan-ly-ngay-nghi/:khoi', component: QuanLyNgayNghiComponent },
    // { path: 'quan-ly-hoc-sinh/quan-ly-chuyen-lop', component: QuanLyHocSinhComponent },
    // {
    //   path: 'login', component: LoginComponent,
    //   children: [
    //     { path: 'login', component: LogInComponent },
    //     { path: 'forget-password', component: ForgetPasswordComponent },
    //   ]
    // },
  ]
}];

@NgModule({
  declarations: [
    TrangChuComponent, 
    SlideComponent,
    UyTinComponent,
    SanPhamNoiBatComponent,
    SanPhamBanChayComponent,
    TatCaSanPhamComponent,
    DanhGiaKhachComponent,
    TinTucComponent,
    VideoComponent,  
     
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MDBBootstrapModule.forRoot(),
    FormsModule,

  ],
  entryComponents: [
    TrangChuComponent
  ],
  exports: [CommonModule, FormsModule]
})
export class TrangChuModule { }
