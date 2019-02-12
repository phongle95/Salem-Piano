import { Video } from './../../../model/video';

import { PianoService } from './../../../api/piano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit {
  video = new Video();
  listData: any = [];

  constructor(
    private pianoService: PianoService,
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    // get all new
    this.getVideo();
  }

  /**
   * get all new
   */
  getVideo() {
    // get all new
    this.pianoService.subscription.push(
      this.pianoService.excuteAllByWhat({}, '40')
        .subscribe(data => {
          // đổ data lên màn hình
          this.listData = data;
        })
    );
  }

  /**
   * xóa tin tức
   * @param id 
   */
  deleteVideoById(id: number) {
    // xóa tin tức
    this.pianoService.subscription.push(
      this.pianoService.excuteAllByWhat({ id: id }, '43')
        .subscribe(() => {
          this.pianoService.showSuccess('Xóa thành công!')
          this.getVideo();
        })
    );

  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.pianoService.destroySubcribe();
  }

}
