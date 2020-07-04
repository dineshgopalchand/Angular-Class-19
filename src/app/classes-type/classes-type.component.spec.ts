import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTypeComponent } from './classes-type.component';

describe('ClassesTypeComponent', () => {
  let component: ClassesTypeComponent;
  let fixture: ComponentFixture<ClassesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
