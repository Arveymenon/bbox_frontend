
import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './init-page/init-page.module#InitPagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    // path: 'home',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // 
     path: 'home',
     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
     canActivate: [AuthGuardService]
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'create-group', loadChildren: './create-group/create-group.module#CreateGroupPageModule' },
  { path: 'add-member/:id', loadChildren: './add-member/add-member.module#AddMemberPageModule' },
  { path: 'join-group', loadChildren: './join-group/join-group.module#JoinGroupPageModule' },
  { path: 'invite-member', loadChildren: './invite-member/invite-member.module#InviteMemberPageModule' },
  { path: 'create-feed', loadChildren: './create-feed/create-feed.module#CreateFeedPageModule' },
  { path: 'group-chat/:id', loadChildren: './group-chat/group-chat.module#GroupChatPageModule' },
  { path: 'group-details/:id', loadChildren: './group-details/group-details.module#GroupDetailsPageModule' },
  { path: 'group-chat-admin/:id', loadChildren: './group-chat-admin/group-chat-admin.module#GroupChatAdminPageModule' },
  { path: 'send-message', loadChildren: './send-message/send-message.module#SendMessagePageModule' },
  { path: 'video-chat/:id', loadChildren: './video-chat/video-chat.module#VideoChatPageModule' },
  { path: 'audio-chat', loadChildren: './audio-chat/audio-chat.module#AudioChatPageModule' },
  { path: 'audio-call/:id', loadChildren: './audio-call/audio-call.module#AudioCallPageModule' },
  { path: 'view-attachment', loadChildren: './view-attachment/view-attachment.module#ViewAttachmentPageModule' },
  { path: 'test-group', loadChildren: './test-group/test-group.module#TestGroupPageModule' },
  { path: 'view-video/:video', loadChildren: './view-video/view-video.module#ViewVideoPageModule' },
  { path: 'view-image/:image', loadChildren: './view-image/view-image.module#ViewImagePageModule' },
  { path: 'create-personal-chat', loadChildren: './create-personal-chat/create-personal-chat.module#CreatePersonalChatPageModule' },
  { path: 'create-video-chat', loadChildren: './create-video-chat/create-video-chat.module#CreateVideoChatPageModule' },
  { path: 'feed-popover', loadChildren: './feed-popover/feed-popover.module#FeedPopoverPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'contact-list', loadChildren: './contact-list/contact-list.module#ContactListPageModule' },
  { path: 'receive-incoming-call/:id', loadChildren: './receive-incoming-call/receive-incoming-call.module#ReceiveIncomingCallPageModule' },
  { path: 'get-number', loadChildren: './get-number/get-number.module#GetNumberPageModule' },
  { path: 'init-page', loadChildren: './init-page/init-page.module#InitPagePageModule' },  { path: 'block-list', loadChildren: './block-list/block-list.module#BlockListPageModule' },




  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
