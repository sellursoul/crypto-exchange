import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCoinsComponent } from './market-coins.component';

describe('MarketCoinsComponent', () => {
  let component: MarketCoinsComponent;
  let fixture: ComponentFixture<MarketCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
