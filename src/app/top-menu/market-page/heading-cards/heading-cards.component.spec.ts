import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingCardsComponent } from './heading-cards.component';

describe('HeadingCardsComponent', () => {
  let component: HeadingCardsComponent;
  let fixture: ComponentFixture<HeadingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
