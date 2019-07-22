import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootrapPracticeComponent } from './bootrap-practice.component';

describe('BootrapPracticeComponent', () => {
  let component: BootrapPracticeComponent;
  let fixture: ComponentFixture<BootrapPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootrapPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootrapPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
