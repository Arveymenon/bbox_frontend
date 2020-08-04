import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatAdminPage } from './group-chat-admin.page';

describe('GroupChatAdminPage', () => {
  let component: GroupChatAdminPage;
  let fixture: ComponentFixture<GroupChatAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChatAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
