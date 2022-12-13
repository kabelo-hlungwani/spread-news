import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorfooterComponent } from './authorfooter.component';

describe('AuthorfooterComponent', () => {
  let component: AuthorfooterComponent;
  let fixture: ComponentFixture<AuthorfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
