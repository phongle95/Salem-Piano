import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamNoiBatComponent } from './san-pham-noi-bat.component';

describe('SanPhamNoiBatComponent', () => {
  let component: SanPhamNoiBatComponent;
  let fixture: ComponentFixture<SanPhamNoiBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPhamNoiBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamNoiBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
