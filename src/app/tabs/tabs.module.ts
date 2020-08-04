import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { TranslateModule } from '@ngx-translate/core'
import { OpenViduVideoComponent } from '../shared/components/stream/ov-video.component';
import { SettingUpModalComponent } from '../shared/components/setting-up-modal/setting-up-modal.component';
import { StreamComponent } from '../shared/components/stream/stream.component';
import { AudioCallPageModule } from '../audio-call/audio-call.module';
import { VideoChatPageModule } from '../video-chat/video-chat.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    TabsPage
  ]
  
})
export class TabsPageModule {}
