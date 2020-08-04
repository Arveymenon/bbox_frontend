import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiveIncomingCallPage } from './receive-incoming-call.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveIncomingCallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceiveIncomingCallPage]
})
export class ReceiveIncomingCallPageModule {}
