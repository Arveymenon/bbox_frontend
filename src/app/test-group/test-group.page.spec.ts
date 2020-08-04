import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGroupPage } from './test-group.page';

describe('TestGroupPage', () => {
  let component: TestGroupPage;
  let fixture: ComponentFixture<TestGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
