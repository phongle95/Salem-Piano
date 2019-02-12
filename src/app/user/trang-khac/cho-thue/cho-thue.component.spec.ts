import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoThueComponent } from './cho-thue.component';

describe('ChoThueComponent', () => {
  let component: ChoThueComponent;
  let fixture: ComponentFixture<ChoThueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoThueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoThueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
