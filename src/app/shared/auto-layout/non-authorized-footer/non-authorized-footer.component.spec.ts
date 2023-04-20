import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthorizedFooterComponent } from './non-authorized-footer.component';

describe('NonAuthorizedFooterComponent', () => {
  let component: NonAuthorizedFooterComponent;
  let fixture: ComponentFixture<NonAuthorizedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAuthorizedFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAuthorizedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
