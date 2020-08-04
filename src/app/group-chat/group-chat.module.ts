import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupChatPage } from './group-chat.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core'
import { GroupDetailsPage } from '../group-details/group-details.page';
import { GroupDetailsPageModule } from '../group-details/group-details.module';
// import { LongPressModule } from 'ionic-long-press';
// import { Clipboard } from '@ionic-native/clipboard/ngx';


const routes: Routes = [
  {
    path: '',
    component: GroupChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    ReactiveFormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    // LongPressModule
  ],
  declarations: [GroupChatPage],
  providers: [
    // Clipboard
  ],
})
export class GroupChatPageModule {}
