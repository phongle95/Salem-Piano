import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-pham-noi-bat',
  templateUrl: './san-pham-noi-bat.component.html',
  styleUrls: ['./san-pham-noi-bat.component.scss']
})
export class SanPhamNoiBatComponent implements OnInit {


  // slides: any = [[]];
  listPiano03: any;
  listPiano33: any;
  listPiano31: any;
  listPiano42:any;

  constructor(
    private pianoService: PianoService
  ) {

  }

  ngOnInit() {
    this.getPiano03();
    this.getPiano33();
    this.getPiano31();
    this.getPiano42();
  }


  //getPiano vi tri thu 0 lay 1
  getPiano03() {
    this.pianoService.excuteAllByWhat({}, '25')
      .subscribe(data => {
        this.listPiano03 = data;
      })
  }

  

  //getPiano vi tri thu 1 lay 2
  getPiano33() {
    this.pianoService.excuteAllByWhat({}, '26')
      .subscribe(data => {
        this.listPiano33 = data;
        // this.slides = this.chunk(this.listPiano, 3);

      })
  }

  

  //getPiano vi tri thu 3 lay 1
  getPiano31() {
    this.pianoService.excuteAllByWhat({}, '27')
      .subscribe(data => {
        this.listPiano31 = data;
      })
  }


  
  //getPiano vi tri thu 4 lay 1
  getPiano42() {
    this.pianoService.excuteAllByWhat({}, '28')
      .subscribe(data => {
        this.listPiano42 = data;
      })
  }

  // chunk(arr, chunkSize) {
  //   let R = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     R.push(arr.slice(i, i + chunkSize));
  //   }
  //   return R;
  // }

}
