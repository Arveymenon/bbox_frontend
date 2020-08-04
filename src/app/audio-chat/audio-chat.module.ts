import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioChatPage } from './audio-chat.page';

import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: AudioChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AudioChatPage]
})
export class AudioChatPageModule {}
