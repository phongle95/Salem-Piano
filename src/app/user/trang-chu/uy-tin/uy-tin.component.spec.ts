import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UyTinComponent } from './uy-tin.component';

describe('UyTinComponent', () => {
  let component: UyTinComponent;
  let fixture: ComponentFixture<UyTinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyTinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyTinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
