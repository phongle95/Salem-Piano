import { PianoService } from 'src/app/api/piano.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: any;
  video1: any;
  video2: any;
  constructor(
    private pianoService: PianoService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getVideo();
    this.getVideo1();
    this.getVideo2();
  }

  // lay video
  getVideo() {
    this.pianoService.excuteAllByWhat({}, '45')
      .subscribe(data => {
        this.video = data;
        console.log('phog', this.video);

      })
  }
  // lay video
  getVideo1() {
    this.pianoService.excuteAllByWhat({}, '46')
      .subscribe(data => {
        this.video1 = data;
      })
  }
  // lay video
  getVideo2() {
    this.pianoService.excuteAllByWhat({}, '47')
      .subscribe(data => {
        this.video2 = data;
      })
  }
}
