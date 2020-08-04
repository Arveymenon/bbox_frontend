import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinGroupPage } from './join-group.page';

import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: JoinGroupPage
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
  declarations: [JoinGroupPage]
})
export class JoinGroupPageModule {}
