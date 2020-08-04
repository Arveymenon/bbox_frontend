import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedPage } from './create-feed.page';

describe('CreateFeedPage', () => {
  let component: CreateFeedPage;
  let fixture: ComponentFixture<CreateFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
