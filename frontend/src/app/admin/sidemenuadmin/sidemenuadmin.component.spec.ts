import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuadminComponent } from './sidemenuadmin.component';

describe('SidemenuadminComponent', () => {
  let component: SidemenuadminComponent;
  let fixture: ComponentFixture<SidemenuadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenuadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenuadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
