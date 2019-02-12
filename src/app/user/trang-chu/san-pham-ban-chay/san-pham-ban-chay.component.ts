import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-pham-ban-chay',
  templateUrl: './san-pham-ban-chay.component.html',
  styleUrls: ['./san-pham-ban-chay.component.scss']
})
export class SanPhamBanChayComponent implements OnInit {


  slides: any = [[]];
  listPiano: any;

  constructor(
    private pianoService: PianoService
  ) {

  }

  ngOnInit() {
    this.getPiano();
  }


  //getPiano
  getPiano() {
    this.pianoService.excuteAllByWhat({}, '26')
      .subscribe(data => {
        this.listPiano = data;
        this.slides = this.chunk(this.listPiano, 3);

      })
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
