import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalChatPage } from './create-personal-chat.page';

describe('CreatePersonalChatPage', () => {
  let component: CreatePersonalChatPage;
  let fixture: ComponentFixture<CreatePersonalChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonalChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonalChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
