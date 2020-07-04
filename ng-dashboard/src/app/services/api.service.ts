import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user
    );
  }

  getUsers() {
    return this.http.get(`${environment.fbDbUrl}/users.json`).subscribe(response => {
      console.log(response);
    })
  }
}
