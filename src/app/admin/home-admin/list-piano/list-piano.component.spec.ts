import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPianoComponent } from './list-piano.component';

describe('ListPianoComponent', () => {
  let component: ListPianoComponent;
  let fixture: ComponentFixture<ListPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
