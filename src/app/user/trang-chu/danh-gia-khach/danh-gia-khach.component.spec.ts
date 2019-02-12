import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaKhachComponent } from './danh-gia-khach.component';

describe('DanhGiaKhachComponent', () => {
  let component: DanhGiaKhachComponent;
  let fixture: ComponentFixture<DanhGiaKhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhGiaKhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaKhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
