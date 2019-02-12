import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaChuaDanComponent } from './sua-chua-dan.component';

describe('SuaChuaDanComponent', () => {
  let component: SuaChuaDanComponent;
  let fixture: ComponentFixture<SuaChuaDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaChuaDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaChuaDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
