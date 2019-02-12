
import { Router, ActivatedRoute } from '@angular/router';
import { PianoService } from './../../../api/piano.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Piano } from '../../../model/piano';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-update-piano',
  templateUrl: './update-piano.component.html',
  styleUrls: ['./update-piano.component.scss']
})
export class UpdatePianoComponent implements OnInit {



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
  id: number;

  image: any = {
    filename: '',
    filetype: '',
    value: ''
  };

  @ViewChild('fileInput') fileInput: ElementRef;




  constructor(
    private pianoservice: PianoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get id cho piano
    this.id = this.route.snapshot.params['id'];

    this.getPianoById();
   
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

  // get piano
  getPianoById() {
    this.pianoservice.excuteAllByWhat({ id: this.id }, '24')
      .subscribe(data => {
        this.piano = data[0];
        this.piano.moTaSP = this.piano.moTaSP.replace(/"/g, '');
        this.piano.moTaSP = this.piano.moTaSP.replace(/xxxxxxxx/g, '\"');
        this.piano.moTaSP = this.piano.moTaSP.replace(/xxxx/g, "'");

        this.piano.thongSoKT = this.piano.thongSoKT.replace(/"/g, '');
        this.piano.thongSoKT = this.piano.thongSoKT.replace(/xxxxxxxx/g, '\"');
        this.piano.thongSoKT = this.piano.thongSoKT.replace(/xxxx/g, "'");


      })
  }

  // update piano

  updatePiano() {
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
    this.piano.luotXem = 0;
    // update ngay dang
      // xử lý hình ảnh
      this.piano.hinhAnh = this.image;
    this.today = new Date();
    this.piano.ngayDang = this.today.getFullYear() + '-' +
      (this.today.getMonth() + 1) + '-' +
      this.today.getDate();

    this.pianoservice.excuteAllByWhat(this.piano, '22')
      .subscribe(() => {
        this.pianoservice.showSuccess("Cập nhập thành công");
        this.goBack();
      })
  }

  // goback
  goBack() {
    this.router.navigate(['/admin/dashboards/list-piano']);
  }

}
