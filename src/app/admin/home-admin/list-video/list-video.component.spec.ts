import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoComponent } from './list-video.component';

describe('ListVideoComponent', () => {
  let component: ListVideoComponent;
  let fixture: ComponentFixture<ListVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
