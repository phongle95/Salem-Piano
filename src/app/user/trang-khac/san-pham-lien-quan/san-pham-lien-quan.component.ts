import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../../api/piano.service';

@Component({
  selector: 'app-san-pham-lien-quan',
  templateUrl: './san-pham-lien-quan.component.html',
  styleUrls: ['./san-pham-lien-quan.component.scss']
})
export class SanPhamLienQuanComponent implements OnInit {

  
  // slides: any = [[]];
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
    this.pianoService.excuteAllByWhat({}, '266')
      .subscribe(data => {
        this.listPiano = data;
        // this.slides = this.chunk(this.listPiano, 3);

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
