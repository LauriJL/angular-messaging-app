import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoginService} from '../services/loginservice.service';
import { Message } from '../models/message.model';
import { MessageService } from '../services/messageservice.service';

@Component({
	selector:"messagelist",
	templateUrl:"./messagelist.component.html",
    styleUrls: ['../app.component.css']
})

export class MessageList implements OnInit {
    
    list:Message[] = [];
    
    constructor(private router: Router, private login : LoginService, private messages : MessageService){};

	ngOnInit() {
		if(this.login.isUserLogged()) {
			this.getList();
		} else {
			this.router.navigate(["/"]);
		}
	}

	getList() {
		this.messages.getList().subscribe({
			next:(data) => this.list = data,
			error:(error) => {
				if(error.status === 403) {
					this.login.setLoginState(false,"");
					this.router.navigate(["/"])
				} else {
					console.log(error)
				}
			},
			complete: () => console.log("Get Messages Done")
		})
	}


}