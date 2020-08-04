import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetNumberPage } from './get-number.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { IonicTelInputModule} from 'ionic-tel-input';

const routes: Routes = [
  {
    path: '',
    component: GetNumberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgxMatIntlTelInputModule,
    IonicTelInputModule
  ],
  declarations: [GetNumberPage]
})
export class GetNumberPageModule {}
