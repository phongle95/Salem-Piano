import { PianoService } from './../../../api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {

  private tintuc = '';
  listTin: any;
  listTin55: any;
  tieuDiem: any;
  tinMoi: any;
  constructor(
    private pianoService: PianoService
  ) { }

  ngOnInit() {
    this.getNews();
    this.getTieuDiem();
    this.getTinMoi();
    this.getNews55();
  }

  onClickChange1(){
    this.tintuc ='';
  }

  onClickChange2(){
    this.tintuc ='trang2';
  }


  // lay tin moi nhat
  getNews() {

    this.pianoService.excuteAllByWhat({}, '15')
      .subscribe(data => {
        this.listTin = data;

      });


  }

   // lay tin moi nhat vi tri thu 5 lay 5
   getNews55() {

    this.pianoService.excuteAllByWhat({}, '18')
      .subscribe(data => {
        this.listTin55 = data;

      });


  }

  //lay tieu diem
  getTieuDiem() {
    this.pianoService.excuteAllByWhat({}, '16')
      .subscribe(data => {
        this.tieuDiem = data;
      })

  }

  //lay tin moi
  getTinMoi() {
    this.pianoService.excuteAllByWhat({}, '17')
      .subscribe(data => {
        this.tinMoi = data;
      })
  }

}
