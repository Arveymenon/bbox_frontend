import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviewFeedModalPage } from './preview-feed-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewFeedModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // PreviewFeedModalPage
  ]
})
export class PreviewFeedModalPageModule {}
