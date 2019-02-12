import { ActivatedRoute, Router } from '@angular/router';
import { PianoService } from './../../../api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.scss']
})
export class ChiTietSanPhamComponent implements OnInit {

  private moTa: boolean = true;
  data: any;
  id: number;

  constructor(
    private pianoService: PianoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.id = this.route.snapshot.params['id'];
      this.getPianoById();
      this.onActivate();

    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getPianoById();
  }

  //lay chi tiet piano
  getPianoById() {
    this.pianoService.excuteAllByWhat({ id: this.id }, '24')
      .subscribe(data => {
        this.data = data[0];
        this.data.moTaSP = this.data.moTaSP.replace(/"/g, '');
        this.data.moTaSP = this.data.moTaSP.replace(/xxxxxxxx/g, '\"');
        this.data.moTaSP = this.data.moTaSP.replace(/xxxx/g, "'");

        this.data.thongSoKT = this.data.thongSoKT.replace(/"/g, '');
        this.data.thongSoKT = this.data.thongSoKT.replace(/xxxxxxxx/g, '\"');
        this.data.thongSoKT = this.data.thongSoKT.replace(/xxxx/g, "'");

        // console.log('data',this.data);
       
      })
  }

  /**
   * onBtnMoTaClick
   */
  onBtnMoTaClick() {
    this.moTa = true;
  }

  /**
   * onBtnKyThuatClick
   */
  onBtnKyThuatClick() {
    this.moTa = false;
  }

  //ham  len dau trang
  onActivate() {
    window.scrollTo(0, 0);
  }


}
