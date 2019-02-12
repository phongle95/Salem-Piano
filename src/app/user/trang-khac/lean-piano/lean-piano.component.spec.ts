import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanPianoComponent } from './lean-piano.component';

describe('LeanPianoComponent', () => {
  let component: LeanPianoComponent;
  let fixture: ComponentFixture<LeanPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
