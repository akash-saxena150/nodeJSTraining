import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPreviewComponent } from './coach-preview.component';

describe('CoachPreviewComponent', () => {
  let component: CoachPreviewComponent;
  let fixture: ComponentFixture<CoachPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
