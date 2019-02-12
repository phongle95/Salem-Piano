import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietTinTucComponent } from './chi-tiet-tin-tuc.component';

describe('ChiTietTinTucComponent', () => {
  let component: ChiTietTinTucComponent;
  let fixture: ComponentFixture<ChiTietTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
