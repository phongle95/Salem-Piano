import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamLienQuanComponent } from './san-pham-lien-quan.component';

describe('SanPhamLienQuanComponent', () => {
  let component: SanPhamLienQuanComponent;
  let fixture: ComponentFixture<SanPhamLienQuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPhamLienQuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamLienQuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
