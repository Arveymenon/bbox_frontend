import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendMessagePage } from './send-message.page';

import { TranslateModule } from '@ngx-translate/core'
import { GroupChatAdminPage } from '../group-chat-admin/group-chat-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SendMessagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendMessagePage],
  providers: [GroupChatAdminPage]
})
export class SendMessagePageModule {}
