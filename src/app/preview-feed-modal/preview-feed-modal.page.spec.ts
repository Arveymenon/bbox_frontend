import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFeedModalPage } from './preview-feed-modal.page';

describe('PreviewFeedModalPage', () => {
  let component: PreviewFeedModalPage;
  let fixture: ComponentFixture<PreviewFeedModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFeedModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFeedModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
