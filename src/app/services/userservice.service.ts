import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { User } from '../models/user.model';
import {LoginService} from '../services/loginservice.service';
import {BackendMessage} from '../models/backendmessage.model';
import { SendMessage } from '../components/sendmessage.component';


@Injectable()

export class UserService {

    constructor(private http:HttpClient, private login:LoginService) {}

	getList() {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type":"application/json",
				"token":this.login.getToken()
			})
		}
		return this.http.get<User[]>("/api/users",httpOptions);
	}

	SendMessage() {
		console.log("send message clicked")
		// const httpOptions = {
		// 	headers: new HttpHeaders({
		// 		"Content-Type":"application/json",
		// 		"token":this.login.getToken()
		// 	})
		// }
		// return this.http.get<User[]>("/api/users",httpOptions);
	}
}