

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
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

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

  image: any = {
    filename: '',
    filetype: '',
    value: ''
  };

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private pianoservice: PianoService,
    private route: Router,
  ) {
  }

  ngOnInit() {
    this.news = {
      id: 0,
      tieuDe: '',
      tomTat: '',
      hinhAnh: null,
      noiDung: '',
      ngayDang: '',
      luotXem: 0,
      tuKhoa: '',
    } as News;
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
   * them tin tưc
   */
  addNews() {
    // xử lý hình ảnh
    this.news.hinhAnh = this.image;
    if (this.news.hinhAnh.value !== "") {
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
  
      // update ngay dang
      this.today = new Date();
      this.news.ngayDang = this.today.getFullYear() + '-' +
        (this.today.getMonth() + 1) + '-' +
        this.today.getDate();

      this.pianoservice.subscription.push(
        this.pianoservice.excuteAllByWhat(this.news, '11')
          .subscribe(() => {
            this.pianoservice.showSuccess('Thêm tin thành công!');
            this.goBack();
          })
      );

    } else {
      this.pianoservice.showError('Bạn chưa chọn Hình Ảnh!');
    }


  }

  readURL(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
    }
  }

  /**
   * goBack
   */
  goBack() {
    this.route.navigate(['/admin/dashboards/list-news']);
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.pianoservice.destroySubcribe();
  }


}
