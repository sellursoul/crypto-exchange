import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingContComponent } from './greeting-cont.component';

describe('GreetingContComponent', () => {
  let component: GreetingContComponent;
  let fixture: ComponentFixture<GreetingContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
