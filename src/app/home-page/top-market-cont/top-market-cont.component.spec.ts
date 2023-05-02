import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMarketContComponent } from './top-market-cont.component';

describe('TopMarketContComponent', () => {
  let component: TopMarketContComponent;
  let fixture: ComponentFixture<TopMarketContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMarketContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMarketContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
