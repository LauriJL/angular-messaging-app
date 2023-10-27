import {Component,OnInit,Inject, Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {LoginService} from '../services/loginservice.service';
import { MessageService } from '../services/messageservice.service';
import { UserService } from '../services/userservice.service';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import { BackendMessage } from '../models/backendmessage.model';



@Component({
	selector:"sendmessage",
	templateUrl:"./sendmessage.component.html",
	styleUrls: ['../app.component.css']
})

export class SendMessage  {
	
	item:Message = new Message("","","",0);

	constructor(private route: ActivatedRoute, private router:Router, private message: MessageService, private http:HttpClient, private login:LoginService) {
		this.messagetoken = this.route.snapshot.paramMap.get('param');
	}
	
	messagetoken: string | null;
	

	ngOnInit() {
		if(!this.login.isUserLogged()) {
			this.router.navigate(["/"]);
		}
	}

 	sendMessage() {
		let msg = ''
		if (this.messagetoken) {
			msg = this.messagetoken.toString()
		}
		console.log('messagetoken: ',msg)
		this.item.messagetoken = msg
		console.log('item: ', this.item)
		this.message.sendMsg(this.item).subscribe({
			next:(data) => console.log('data: ', data),
			error:(error) => {
				if(error.status === 403) {
					this.login.setLoginState(false,"")
					this.router.navigate(["/"])
				} else {
					console.log(error)
				}
			},
			complete:() => {
				this.item = new Message("","","",0)
			}
		}) 
	}
}
