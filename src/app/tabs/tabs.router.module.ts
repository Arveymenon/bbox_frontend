import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'joingroup',
            loadChildren: () =>
              import('../join-group/join-group.module').then(m => m.JoinGroupPageModule)
          },
          {
            path: 'invitemember',
            loadChildren: () =>
              import('../invite-member/invite-member.module').then(m => m.InviteMemberPageModule)
          },
          {
            path: 'groupchat/:id',
            children:[
              {
                path:'',
                loadChildren: () =>
                import('../group-chat/group-chat.module').then(m => m.GroupChatPageModule)
              },
              {
                path:'groupdetails/:id',
                loadChildren: () =>
                import('../group-details/group-details.module').then(m => m.GroupDetailsPageModule)
              },
            ]
          },
          {
            path: 'groupchat',
            children:[
              {
                path:'groupchatadmin/:id',
                loadChildren: () =>
                import('../group-chat-admin/group-chat-admin.module').then(m => m.GroupChatAdminPageModule)
              },
            ]
          },
          {
            path: 'creategroup',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../create-group/create-group.module').then(m => m.CreateGroupPageModule)
              },
              {
                path: 'addmember/:id',
                loadChildren: () =>
                  import('../add-member/add-member.module').then(m => m.AddMemberPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
