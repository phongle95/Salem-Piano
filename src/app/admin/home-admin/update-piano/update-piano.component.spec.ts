import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePianoComponent } from './update-piano.component';

describe('UpdatePianoComponent', () => {
  let component: UpdatePianoComponent;
  let fixture: ComponentFixture<UpdatePianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
