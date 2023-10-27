import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './components/loginpage.component';
import { MessageList } from './components/messagelist.component';
import { UserList } from './components/userlist.component';
import { SendMessage } from './components/sendmessage.component';

const routes: Routes = [{
  path:"", component:LoginPage
}, {
  path:"list",component:MessageList
},
{
  path:"users",component:UserList
},
{
  path:"send/:param",component:SendMessage
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
