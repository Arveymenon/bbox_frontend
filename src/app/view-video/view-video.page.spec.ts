import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoPage } from './view-video.page';

describe('ViewVideoPage', () => {
  let component: ViewVideoPage;
  let fixture: ComponentFixture<ViewVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
