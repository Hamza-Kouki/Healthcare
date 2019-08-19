import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPatientComponent } from './nav-patient.component';

describe('NavPatientComponent', () => {
  let component: NavPatientComponent;
  let fixture: ComponentFixture<NavPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
