import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIntroductionComponent } from './directive-introduction.component';

describe('DirectiveIntroductionComponent', () => {
  let component: DirectiveIntroductionComponent;
  let fixture: ComponentFixture<DirectiveIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
