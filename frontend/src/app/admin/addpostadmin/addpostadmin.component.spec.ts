import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostadminComponent } from './addpostadmin.component';

describe('AddpostadminComponent', () => {
  let component: AddpostadminComponent;
  let fixture: ComponentFixture<AddpostadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpostadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpostadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
