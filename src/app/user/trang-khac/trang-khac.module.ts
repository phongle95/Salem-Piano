import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TrangKhacComponent } from './trang-khac.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { SanPhamLienQuanComponent } from './san-pham-lien-quan/san-pham-lien-quan.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ChiTietTinTucComponent } from './chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { LeanPianoComponent } from './lean-piano/lean-piano.component';
import { VideoComponent } from './video/video.component';
import { SuaChuaDanComponent } from './sua-chua-dan/sua-chua-dan.component';
import { EventComponent } from './event/event.component';
import { ChoThueComponent } from './cho-thue/cho-thue.component';


const routing: Routes = [{
  path: '', component: TrangKhacComponent,
  children: [
    {
      path: 'chi-tiet-san-pham/:id', component: ChiTietSanPhamComponent
    },
    {
      path: 'tin-tuc', component: TinTucComponent
    },
    {
      path: 'chi-tiet-tin-tuc/:id', component: ChiTietTinTucComponent
    },
    {
      path: 'lien-he', component: LienHeComponent
    },
    {
      path: 'gioi-thieu', component: GioiThieuComponent
    },
    { path: 'san-pham', component: SanPhamComponent },
    { path: 'hoc-piano', component: LeanPianoComponent },
    { path: 'video', component: VideoComponent },
    { path: 'sua-chua-dan', component: SuaChuaDanComponent },
    { path: 'to-chuc-su-kien', component: EventComponent },
    { path: 'cho-thue-nhac-cu', component: ChoThueComponent }
  ]
}];

@NgModule({
  declarations: [
    TrangKhacComponent,
    SanPhamLienQuanComponent,
    TinTucComponent,
    ChiTietTinTucComponent,
    GioiThieuComponent,
    LienHeComponent,
    ChiTietSanPhamComponent,
    SanPhamComponent,
    LeanPianoComponent,
    VideoComponent,
    SuaChuaDanComponent,
    EventComponent,
    ChoThueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MDBBootstrapModule.forRoot(),
    FormsModule,

  ],
  entryComponents: [
    TrangKhacComponent
  ],
  exports: [CommonModule, FormsModule]
})
export class TrangKhacModule { }
