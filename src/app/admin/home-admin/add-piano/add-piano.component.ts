
import { PianoService } from './../../../api/piano.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Piano } from '../../../model/piano';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-piano',
  templateUrl: './add-piano.component.html',
  styleUrls: ['./add-piano.component.scss']
})
export class AddPianoComponent implements OnInit {


  editorConfigMTSP: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Nhập mô tả sản phẩm...',
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

  editorConfigTSKT: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Nhập thông tin kĩ thuật sản phẩm...',
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

  piano = new Piano();
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
    private router: Router
  ) { }

  ngOnInit() {

    this.piano = {
      id: 0,
      maSP: '',
      tenSP: '',
      gia: '',
      hinhAnh: null,
      tomTat: '',
      moTaSP: '',
      thongSoKT: '',
      luotXem: 0,
      ngayDang: '',
      tuKhoa: ''
    } as Piano;
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

  // them piano
  addPianoNew() {

    this.piano.hinhAnh = this.image;
    if (this.piano.hinhAnh.value !== "") {
      // xử lý hình ảnh

      // format content
      if (this.piano.moTaSP) {
        this.piano.moTaSP = JSON.stringify(this.piano.moTaSP);
        this.piano.moTaSP = this.piano.moTaSP.replace(/\\"/g, 'xxxxxxxx');
        this.piano.moTaSP = this.piano.moTaSP.replace(/'/g, 'xxxx');
      }

      if (this.piano.thongSoKT) {
        this.piano.thongSoKT = JSON.stringify(this.piano.thongSoKT);
        this.piano.thongSoKT = this.piano.thongSoKT.replace(/\\"/g, 'xxxxxxxx');
        this.piano.thongSoKT = this.piano.thongSoKT.replace(/'/g, 'xxxx');
      }

      // update ngay dang
      this.today = new Date();
      this.piano.ngayDang = this.today.getFullYear() + '-' +
        (this.today.getMonth() + 1) + '-' +
        this.today.getDate();

      this.pianoservice.subscription.push(
        this.pianoservice.excuteAllByWhat(this.piano, '21')
          .subscribe(() => {
            this.pianoservice.showSuccess('Thêm piano thành công!');
            this.goBack();
          })
      );

    } else {
      this.pianoservice.showError('Bạn chưa chọn Hình Ảnh!');
    }




    // console.log('phong', this.piano);
  }

  // go back
  goBack() {
    this.router.navigate(['/admin/dashboards/list-piano']);
  }
}
