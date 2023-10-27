import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoginService} from '../services/loginservice.service';
import { User } from '../models/user.model';
import { UserService } from '../services/userservice.service';
import { SendMessage } from './sendmessage.component';

@Component({
	selector:"userlist",
	templateUrl:"./userlist.component.html",
    styleUrls: ['../app.component.css']
})

export class UserList implements OnInit {
    
    list:User[] = [];
    
    constructor(private router: Router, private login : LoginService, private users : UserService){};

	ngOnInit() {
		if(this.login.isUserLogged()) {
			this.getList();
		} else {
			this.router.navigate(["/"]);
		}
	}

	getList() {
		this.users.getList().subscribe({
			next:(data) => this.list = data,
			error:(error) => {
				if(error.status === 403) {
					this.login.setLoginState(false,"");
					this.router.navigate(["/"])
				} else {
					console.log(error)
				}
			},
			complete: () => console.log("Get Users Done")
		})
	}

	goToSendMessage(messagetoken:string) {
		const paramValue = messagetoken;
		this.router.navigate(['/send', paramValue]);
	}
}