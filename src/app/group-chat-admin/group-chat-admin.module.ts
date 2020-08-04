import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { LongPressModule } from 'ngx-long-press';
// import { LongPressModule } from 'ionic-long-press';


import { IonicModule } from '@ionic/angular';

import { GroupChatAdminPage } from './group-chat-admin.page';

import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: GroupChatAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes),
    // LongPressModule
    
  ],
  declarations: [GroupChatAdminPage]
})
export class GroupChatAdminPageModule {}
