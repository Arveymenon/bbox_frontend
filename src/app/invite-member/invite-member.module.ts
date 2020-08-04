import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from '../shared/components/contacts-list/contacts-list.component';

import { IonicModule } from '@ionic/angular';

import { InviteMemberPage } from './invite-member.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: InviteMemberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule,
  ],
  declarations: [InviteMemberPage, ContactsListComponent],
  exports: [],
  entryComponents: [ContactsListComponent]
})
export class InviteMemberPageModule {}
