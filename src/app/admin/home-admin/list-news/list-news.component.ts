import { PianoService } from './../../../api/piano.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  news = new News();
  listData: any = [];

  constructor(
    private pianoService: PianoService,
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    // get all new
    this.getAllNews();
  }

  /**
   * get all new
   */
  getAllNews() {
    // get all new
    this.pianoService.subscription.push(
      this.pianoService.excuteAllByWhat({}, '10')
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
  deleteNewsById(id: number) {
    // xóa tin tức
    this.pianoService.subscription.push(
      this.pianoService.excuteAllByWhat({ id: id }, '13')
        .subscribe(() => {
          this.pianoService.showSuccess('Xóa thành công!')
          this.getAllNews();
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
