import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tat-ca-san-pham',
  templateUrl: './tat-ca-san-pham.component.html',
  styleUrls: ['./tat-ca-san-pham.component.scss']
})
export class TatCaSanPhamComponent implements OnInit {

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
    this.pianoService.excuteAllByWhat({}, '29')
      .subscribe(data => {
        this.listPiano = data;
        console.log('p',this.listPiano);
        
      })
  }

}
