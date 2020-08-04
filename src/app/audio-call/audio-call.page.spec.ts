import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCallPage } from './audio-call.page';

describe('AudioCallPage', () => {
  let component: AudioCallPage;
  let fixture: ComponentFixture<AudioCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioCallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
