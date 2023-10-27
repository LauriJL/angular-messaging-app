import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './components/loginpage.component';
import { MessageList } from './components/messagelist.component';
import { UserList } from './components/userlist.component';
import { SendMessage } from './components/sendmessage.component';
import { Navbar } from './components/navbar.component';

import { LoginService } from './services/loginservice.service';
import { MessageService } from './services/messageservice.service';
import { UserService } from './services/userservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MessageList,
    UserList,
    SendMessage,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,MessageService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
