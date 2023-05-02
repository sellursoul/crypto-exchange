import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsContComponent } from './investors-cont.component';

describe('InvestorsContComponent', () => {
  let component: InvestorsContComponent;
  let fixture: ComponentFixture<InvestorsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
