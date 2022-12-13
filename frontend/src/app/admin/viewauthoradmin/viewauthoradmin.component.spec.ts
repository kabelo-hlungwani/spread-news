import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewauthoradminComponent } from './viewauthoradmin.component';

describe('ViewauthoradminComponent', () => {
  let component: ViewauthoradminComponent;
  let fixture: ComponentFixture<ViewauthoradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewauthoradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewauthoradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
