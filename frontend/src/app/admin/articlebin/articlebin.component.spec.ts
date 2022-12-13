import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlebinComponent } from './articlebin.component';

describe('ArticlebinComponent', () => {
  let component: ArticlebinComponent;
  let fixture: ComponentFixture<ArticlebinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlebinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
