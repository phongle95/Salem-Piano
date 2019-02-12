import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPianoComponent } from './add-piano.component';

describe('AddPianoComponent', () => {
  let component: AddPianoComponent;
  let fixture: ComponentFixture<AddPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
