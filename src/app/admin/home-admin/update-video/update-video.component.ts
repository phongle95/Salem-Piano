import { Video } from './../../../model/video';

import { PianoService } from './../../../api/piano.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.scss']
})
export class UpdateVideoComponent implements OnInit {


  video = new Video();
  data: any;
  id: number;

  constructor(
    // private khoahocservice: KhoaHocService,
    private Aroute: ActivatedRoute,
    private route: Router,
    private pianoservice: PianoService,
  ) { }

  ngOnInit() {
    // get id of news
    this.id = this.Aroute.snapshot.params['id'];

    this.getVideoByID();
  }

  getVideoByID() {
    this.pianoservice.excuteAllByWhat({ id: this.id }, '44')
      .subscribe(data => {
        this.video = data[0];
      })
  }

  updateVideo() {
    this.pianoservice.excuteAllByWhat(this.video, '42')
      .subscribe(() => {
        this.pianoservice.showSuccess('Cập nhập thành công');
        this.goBack();
      })
  }

  /**
   * goBack
   */
  goBack() {
    this.route.navigate(['/admin/dashboards/list-video']);
  }
}
