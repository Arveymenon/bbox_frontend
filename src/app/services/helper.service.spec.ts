import { TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { HelperService } from './helper.service';
import { TranslateService } from '@ngx-translate/core';

describe('HelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ChangeDetectorRef, TranslateService] // <--- LOOK AT ME I'M A PROVIDER!
  }));

  it('should be created', () => {
    const service: HelperService = TestBed.get(HelperService);
    expect(service).toBeTruthy();
  });
});
