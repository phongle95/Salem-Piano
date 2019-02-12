import { ActivatedRoute, Router } from '@angular/router';
import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.scss']
})
export class ChiTietTinTucComponent implements OnInit {

  id: number;
  data: any;
  tinMoi: any;
  tieuDiem: any;
  constructor(
    private pianoService: PianoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //ham check thay doi de load trang
    this.router.events.subscribe(() => {
      this.id = this.route.snapshot.params['id'];
      this.getNewById();
    });

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getNewById();
    this.getTinMoi();
    this.getTieuDiem();
  }

  //lay tieu diem
  getTieuDiem() {
    this.pianoService.excuteAllByWhat({}, '16')
      .subscribe(data => {
        this.tieuDiem = data;
      })

  }

  // lay tin by id
  getNewById() {
    this.pianoService.excuteAllByWhat({ id: this.id }, '14')
      .subscribe(data => {
        this.data = data[0];
        this.data.noiDung = this.data.noiDung.replace(/"/g, '');
        this.data.noiDung = this.data.noiDung.replace(/xxxxxxxx/g, '\"');
        this.data.noiDung = this.data.noiDung.replace(/xxxx/g, "'");
        this.onActivate();
      })
  }

  //lay tin moi
  getTinMoi() {
    this.pianoService.excuteAllByWhat({}, '17')
      .subscribe(data => {
        this.tinMoi = data;
      })
  }

  //ham  len dau trang
  onActivate() {
    window.scrollTo(0, 0);
  }

}
