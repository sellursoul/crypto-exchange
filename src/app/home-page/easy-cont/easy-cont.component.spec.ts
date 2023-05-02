import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyContComponent } from './easy-cont.component';

describe('EasyContComponent', () => {
  let component: EasyContComponent;
  let fixture: ComponentFixture<EasyContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
