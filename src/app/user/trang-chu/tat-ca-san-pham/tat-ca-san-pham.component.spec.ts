import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatCaSanPhamComponent } from './tat-ca-san-pham.component';

describe('TatCaSanPhamComponent', () => {
  let component: TatCaSanPhamComponent;
  let fixture: ComponentFixture<TatCaSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatCaSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatCaSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
