import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateFeedPage } from './create-feed.page';

import { TranslateModule } from '@ngx-translate/core'
import { PreviewFeedModalPage } from '../preview-feed-modal/preview-feed-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CreateFeedPage,
    PreviewFeedModalPage
  ],
  entryComponents: [
    PreviewFeedModalPage
  ]
})
export class CreateFeedPageModule {}
