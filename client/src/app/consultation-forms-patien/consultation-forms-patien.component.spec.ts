import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationFormsPatienComponent } from './consultation-forms-patien.component';

describe('ConsultationFormsPatienComponent', () => {
  let component: ConsultationFormsPatienComponent;
  let fixture: ComponentFixture<ConsultationFormsPatienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationFormsPatienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationFormsPatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
