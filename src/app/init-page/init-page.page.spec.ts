import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPagePage } from './init-page.page';

describe('InitPagePage', () => {
  let component: InitPagePage;
  let fixture: ComponentFixture<InitPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
