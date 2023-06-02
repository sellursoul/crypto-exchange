import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistOptionalsComponent } from './watchlist-optionals.component';

describe('WatchlistOptionalsComponent', () => {
  let component: WatchlistOptionalsComponent;
  let fixture: ComponentFixture<WatchlistOptionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistOptionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistOptionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
