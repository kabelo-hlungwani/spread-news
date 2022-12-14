import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcatComponent } from './admineditcat.component';

describe('AdmineditcatComponent', () => {
  let component: AdmineditcatComponent;
  let fixture: ComponentFixture<AdmineditcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
