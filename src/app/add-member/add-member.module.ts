import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMemberPage } from './add-member.page';

import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: AddMemberPage
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
  declarations: [AddMemberPage]
})
export class AddMemberPageModule {}
