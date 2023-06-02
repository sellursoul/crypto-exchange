import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCoinsComponent } from './watchlist-coins.component';

describe('WatchlistCoinsComponent', () => {
  let component: WatchlistCoinsComponent;
  let fixture: ComponentFixture<WatchlistCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
