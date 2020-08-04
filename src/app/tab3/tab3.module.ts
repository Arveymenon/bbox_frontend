import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { IonicStorageModule } from '@ionic/storage';

import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    TranslateModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
 
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
