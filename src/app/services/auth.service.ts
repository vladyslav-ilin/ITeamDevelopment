import { Injectable } from '@angular/core';
import {IUser} from "../../dtos/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IUsersList} from "../../dtos/users-list";
import {IAuthState} from "../../dtos/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private unauthorizedUrl: string = '/api/login'
  private adminReports: string = '/api/users';

  onSubmittedUser(userSelected: IUser){
    return this.http.post<IAuthState>(`${environment.apiUrl}${this.unauthorizedUrl}`, userSelected);
  };

  getUsers(token: string) {
    const headers = new HttpHeaders({
      'X-Token': token
    });
    return this.http.get<IUsersList[]>(`${environment.apiUrl}${this.adminReports}`, {headers})
  }


  constructor(private http: HttpClient) { }
}
