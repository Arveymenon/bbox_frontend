import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { TranslateModule } from '@ngx-translate/core'
import { FeedPopoverPage } from '../feed-popover/feed-popover.page';
import { FeedPopoverPageModule } from '../feed-popover/feed-popover.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    FeedPopoverPage
  ],
  entryComponents: [
    FeedPopoverPage
  ],
})
export class Tab2PageModule {}
