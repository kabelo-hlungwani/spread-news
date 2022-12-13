import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthornavbarComponent } from './authornavbar.component';

describe('AuthornavbarComponent', () => {
  let component: AuthornavbarComponent;
  let fixture: ComponentFixture<AuthornavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthornavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
