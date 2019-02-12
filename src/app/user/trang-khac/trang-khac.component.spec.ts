import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangKhacComponent } from './trang-khac.component';

describe('HomeUserComponent', () => {
  let component: TrangKhacComponent;
  let fixture: ComponentFixture<TrangKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
