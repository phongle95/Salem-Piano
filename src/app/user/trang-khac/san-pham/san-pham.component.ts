import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../../api/piano.service';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {

  private sanPham: boolean = true;
  private chon = 'tatca';
  data: any;
  price: any;
  tenSP: any;

  piano: any;

  listPiano: any;
  listPiano83: any;
  listPiano03: any;
  listPiano33: any;
  gia = [
    { 'name': 'Từ 10 - 20 triệu', id: 1 },
    { 'name': 'Tất cả sản phẩm', id: 5 },
    { 'name': 'Dưới 50 triệu', id: 2 },
    { 'name': 'Dưới 100 triệu', id: 3 },
    { 'name': 'Dưới 300 triệu', id: 4 },

  ];
  selectedGia = this.gia[1]

  // thuongHieu = [
  //   { 'name': 'Kawai', id: 1 },
  //   { 'name': 'Tất cả sản phẩm', id: 5 },
  //   { 'name': 'Casio', id: 2 },
  //   { 'name': 'Roland', id: 3 },
  //   { 'name': 'Essex', id: 4 }

  // ];
  // selectedThuongHieu = this.thuongHieu[1]

  constructor(
    private pianoService: PianoService
  ) { }

  ngOnInit() {
    this.getPiano();
    this.getPiano83();
    this.getPiano03();
    this.getPiano33();
  }

  serchPiano() {
    // console.log('phond',this.tenSP);
    if (this.tenSP == '') {

      this.pianoService.showError('Mời bạn nhập tên sản phẩm');
    }
    else {
      this.pianoService.excuteAllByWhat({ tenSP: this.tenSP }, '38')
        .subscribe(data => {
          if (data !== null) {
            this.data = data;
            this.thayDoi();
            this.pianoService.showSuccess('Đã tìm thấy kết quả');
          }
          else {
            this.pianoService.showError('Không tìm thấy kết quả');

          }
        })

    }
  }


  onBtnSanPham() {
    this.chon = 'tatca';
  }
  trang2() {
    this.chon = 'trang2';

  }

  // ham chon option gia piano
  onChange(gia) {
    switch (gia.id) {
      case 1:
        this.getPiano20();
        break;
      case 2:
        this.getPiano50();
        break;
      case 3:
        this.getPiano100();
        break;
      case 4:
        this.getPiano300();
        break;
      case 5:
        this.onBtnSanPham();
        break;
    }
  }
  // ham chon option gia piano
  onChange1(thuongHieu) {
    switch (thuongHieu.id) {
      case 1:
        this.getPianoByK();
        break;
      case 2:
        this.getPianoByC();
        break;
      case 3:
        this.getPianoByR();
        break;
      case 4:
        this.getPianoByE();
        break;
      case 5:
        this.onBtnSanPham();
        break;
    }
  }



  //getPiano
  getPiano() {
    this.pianoService.excuteAllByWhat({}, '29')
      .subscribe(data => {
        this.listPiano = data;

      })
  }

  //getPiano tu vi tri 0 lay 3
  getPiano03() {
    this.pianoService.excuteAllByWhat({}, '2999')
      .subscribe(data => {
        this.listPiano03 = data;

      })
  }

  //getPiano tu vi tri 3 lay 3
  getPiano33() {
    this.pianoService.excuteAllByWhat({}, '29999')
      .subscribe(data => {
        this.listPiano33 = data;

      })
  }

  //getPiano tu vi tri 8 lay 3
  getPiano83() {
    this.pianoService.excuteAllByWhat({}, '299')
      .subscribe(data => {
        this.listPiano83 = data;

      })
  }


  //get piano gia 10 - 20 trieu
  getPiano20() {
    this.pianoService.excuteAllByWhat({}, '30')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Sản phẩm từ 10 - 20 triệu";
        }
      })
  }

  //get piano gia duoi 50 trieu
  getPiano50() {
    this.pianoService.excuteAllByWhat({}, '31')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Sản phẩm từ 20 - 50 triệu";
        }
      })
  }

  //get piano gia duoi 100 trieu
  getPiano100() {
    this.pianoService.excuteAllByWhat({}, '32')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Sản phẩm từ 50 - 100 triệu";
        }
      })
  }

  //get piano gia duoi 300 trieu
  getPiano300() {
    this.pianoService.excuteAllByWhat({}, '33')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Sản phẩm từ 100 - 300 triệu";
        }
      })
  }

  //get piano tenSP 'k'
  getPianoByK() {
    this.pianoService.excuteAllByWhat({}, '34')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Hãng : KAWAI";
        }
        else {
          this.pianoService.showError("Sản phẩm không có");
        }
      })
  }

  //get piano tenSP 'k'
  getPianoByC() {
    this.pianoService.excuteAllByWhat({}, '35')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Hãng : Casio";
        } else {
          this.pianoService.showError("Sản phẩm không có");
        }
      })
  }


  //get piano tenSP 'k'
  getPianoByR() {
    this.pianoService.excuteAllByWhat({}, '36')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Hãng : ROLAND";
        } else {
          this.pianoService.showError("Sản phẩm không có");
        }
      })
  }

  //get piano tenSP 'k'
  getPianoByE() {
    this.pianoService.excuteAllByWhat({}, '37')
      .subscribe(data => {
        if (data != null) {
          this.data = data;
          this.thayDoi();
          this.price = "Hãng : ESSEX";
        } else {
          this.pianoService.showError("Sản phẩm không có");
        }
      })
  }

  // san pham
  thayDoi() {
    this.chon = '';
  }
}
