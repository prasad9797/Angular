import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvergeRatingComponent } from './averge-rating.component';

describe('AvergeRatingComponent', () => {
  let component: AvergeRatingComponent;
  let fixture: ComponentFixture<AvergeRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvergeRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvergeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
