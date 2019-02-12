import { PianoService } from './../../../api/piano.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {

  editorConfigTomTat: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '12rem',
    minHeight: '5rem',
    placeholder: 'Nhập tóm tắt tin tức...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  editorConfigNoiDung: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Nhập nội dung tin tức...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  news = new News();
  today: Date;
  data: any;
  id:number;

  image: any = {
    filename: '',
    filetype: '',
    value: ''
  };

  @ViewChild('fileInput') fileInput: ElementRef;


  constructor(
    // private khoahocservice: KhoaHocService,
    private Aroute: ActivatedRoute,
    private route: Router,
    private pianoservice: PianoService,
  ) { }

  ngOnInit() {
    // get id of news
    this.id = this.Aroute.snapshot.params['id'];

    // getNewsById
    this.getNewsById();
  }


  
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = String(reader.result);
        this.image = {
          filename: file.name,
          filetype: file.type,
          value: result.split(',')[1]
        };
      };
    }
  }


  /**
   * get one news by id
   */
  getNewsById() {
    this.pianoservice.excuteAllByWhat({ id: this.id }, '14')
      .subscribe(data => {
        this.news = data[0];
        this.news.tomTat = this.news.tomTat.replace(/"/g, '');
        this.news.tomTat = this.news.tomTat.replace(/xxxxxxxx/g, '\"');
        this.news.tomTat = this.news.tomTat.replace(/xxxx/g, "'");

        this.news.noiDung = this.news.noiDung.replace(/"/g, '');
        this.news.noiDung = this.news.noiDung.replace(/xxxxxxxx/g, '\"');
        this.news.noiDung = this.news.noiDung.replace(/xxxx/g, "'");


      });
  }

  /**
   * cap nhat tin tưc
   */
  updateNews() {
     // format content
    // if (this.news.tomTat) {
    //   this.news.tomTat = JSON.stringify(this.news.tomTat);
    //   this.news.tomTat = this.news.tomTat.replace(/\\"/g, 'xxxxxxxx');
    //   this.news.tomTat = this.news.tomTat.replace(/'/g, 'xxxx');
    // }

    if (this.news.noiDung) {
      this.news.noiDung = JSON.stringify(this.news.noiDung);
      this.news.noiDung = this.news.noiDung.replace(/\\"/g, 'xxxxxxxx');
      this.news.noiDung = this.news.noiDung.replace(/'/g, 'xxxx');
    }

    this.news.luotXem = 0;

    // update ngay dang
    this.today = new Date(); 
    this.news.ngayDang  = this.today.getFullYear() + '-' +
      (this.today.getMonth() + 1) + '-' +
      this.today.getDate();  

    // xử lý hình ảnh
    this.news.hinhAnh = this.image;

    this.pianoservice.subscription.push(
      this.pianoservice.excuteAllByWhat(this.news, '12')
        .subscribe((data) => {
          this.pianoservice.showSuccess('Cập nhật tin thành công!');
          this.goBack();
        })
    );
  }

  /**
   * goBack
   */
  goBack() {
    this.route.navigate(['/admin/dashboards/list-news']);
  }
}
