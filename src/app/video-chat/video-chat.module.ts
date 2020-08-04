import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoChatPage } from './video-chat.page';

import { TranslateModule } from '@ngx-translate/core';
import { SettingUpModalComponent } from '../shared/components/setting-up-modal/setting-up-modal.component';
import { StreamComponent } from '../shared/components/stream/stream.component';
import { OpenViduVideoComponent } from '../shared/components/stream/ov-video.component';
import { SharedModule } from '../shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: VideoChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    SharedModule
  ],
  declarations: [VideoChatPage],
  entryComponents: []
})
export class VideoChatPageModule {}
