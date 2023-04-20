import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedFooterComponent } from './authorized-footer.component';

describe('AuthorizedFooterComponent', () => {
  let component: AuthorizedFooterComponent;
  let fixture: ComponentFixture<AuthorizedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
