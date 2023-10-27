import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Message } from '../models/message.model';

import {LoginService} from '../services/loginservice.service';
import {BackendMessage} from '../models/backendmessage.model';

@Injectable()
export class MessageService {

    constructor(private http:HttpClient, private login:LoginService) {}

	getList() {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type":"application/json",
				"token":this.login.getToken()
			})
		}
		return this.http.get<Message[]>("/api/messages",httpOptions);
	}

	sendMsg(item:Message) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type":"application/json",
				"token":this.login.getToken()
			})
		}
		return this.http.post("/api/messages",item,httpOptions);		
	}
}


