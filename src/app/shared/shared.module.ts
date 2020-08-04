import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { SettingUpModalComponent } from '../shared/components/setting-up-modal/setting-up-modal.component';
import { StreamComponent } from '../shared/components/stream/stream.component';
import { OpenViduVideoComponent } from '../shared/components/stream/ov-video.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [StreamComponent, SettingUpModalComponent, OpenViduVideoComponent],
  entryComponents: [SettingUpModalComponent],
  exports: [
    StreamComponent, SettingUpModalComponent, OpenViduVideoComponent
  ]
})
export class SharedModule {}
