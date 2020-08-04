import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioChatPage } from './audio-chat.page';

describe('AudioChatPage', () => {
  let component: AudioChatPage;
  let fixture: ComponentFixture<AudioChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
