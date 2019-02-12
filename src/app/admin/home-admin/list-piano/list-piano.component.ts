
import { PianoService } from './../../../api/piano.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list-piano',
  templateUrl: './list-piano.component.html',
  styleUrls: ['./list-piano.component.scss']
})
export class ListPianoComponent implements OnInit {

  data: any;

  constructor(
    private pianoservice: PianoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPiano();
  }


  //get all piano
  getPiano() {
    this.pianoservice.excuteAllByWhat({}, '20')
      .subscribe(data => {
        this.data = data;
        // console.log('phong', data);

      })
  }

  //xoa piano
  deletePianoById(id: number) {
    this.pianoservice.excuteAllByWhat({ id: id }, '23')
      .subscribe(() => {
        this.pianoservice.showSuccess('Đã xóa thành công');
        this.getPiano();
      })
  }
 
}
