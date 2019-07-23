import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListRowComponent } from './student-list-row.component';

describe('StudentListRowComponent', () => {
  let component: StudentListRowComponent;
  let fixture: ComponentFixture<StudentListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
