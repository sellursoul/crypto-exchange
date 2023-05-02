import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningContComponent } from './mining-cont.component';

describe('MiningContComponent', () => {
  let component: MiningContComponent;
  let fixture: ComponentFixture<MiningContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
