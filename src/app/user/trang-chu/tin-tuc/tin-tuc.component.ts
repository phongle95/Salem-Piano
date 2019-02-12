import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {

  tinMoi: any;
  constructor(
    private pianoService: PianoService
  ) { }

  ngOnInit() {

    this.getTinMoi();
  }

  //lay tin moi
  getTinMoi() {
    this.pianoService.excuteAllByWhat({}, '17')
      .subscribe(data => {
        this.tinMoi = data;
      })
  }

}
