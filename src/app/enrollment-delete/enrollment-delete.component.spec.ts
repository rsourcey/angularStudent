import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDeleteComponent } from './enrollment-delete.component';

describe('EnrollmentDeleteComponent', () => {
  let component: EnrollmentDeleteComponent;
  let fixture: ComponentFixture<EnrollmentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
