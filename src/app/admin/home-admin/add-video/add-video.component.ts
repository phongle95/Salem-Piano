import { Video } from './../../../model/video';

import { PianoService } from './../../../api/piano.service';
import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { News } from 'src/app/model/news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
// import { humanizeBytes } from 'ng-uikit-pro-standard';

// import $ from 'jquery/dist/jquery.min';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video = new Video();
  data: any;


  constructor(
    private pianoservice: PianoService,
    private route: Router,
  ) {
  }

  ngOnInit() {

  }

  addVideo() {
    // console.log('pog',this.video);
    
    this.pianoservice.excuteAllByWhat(this.video, '41')
      .subscribe(() => {
        this.pianoservice.showSuccess('Thêm thành công');
        this.goBack();
      })
  }


  /**
   * goBack
   */
  goBack() {
    this.route.navigate(['/admin/dashboards/list-video']);
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.pianoservice.destroySubcribe();
  }


}
