import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPopoverPage } from './feed-popover.page';

describe('FeedPopoverPage', () => {
  let component: FeedPopoverPage;
  let fixture: ComponentFixture<FeedPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
