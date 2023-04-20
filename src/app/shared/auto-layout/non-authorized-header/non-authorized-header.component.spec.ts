import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthorizedHeaderComponent } from './non-authorized-header.component';

describe('NonAuthorizedHeaderComponent', () => {
  let component: NonAuthorizedHeaderComponent;
  let fixture: ComponentFixture<NonAuthorizedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAuthorizedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAuthorizedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
