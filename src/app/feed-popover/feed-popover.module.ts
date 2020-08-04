import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedPopoverPage } from './feed-popover.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab3PageModule } from '../tab3/tab3.module';
import { AppComponent } from '../app.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: FeedPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Tab3PageModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [
    // FeedPopoverPage
  ],
  providers: [
    AppComponent
  ]
})
export class FeedPopoverPageModule {}
