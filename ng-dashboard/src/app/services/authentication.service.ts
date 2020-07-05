import { Injectable } from '@angular/core';
import {FbAuthResponse, User} from "../interfaces";
import {Observable, Subject, throwError} from "rxjs";
import {ApiService} from "./api.service";
import {catchError, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private api: ApiService) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null
    }

    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.api.login(user)
      .pipe(
        tap(AuthenticationService.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    AuthenticationService.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private static setToken(response: FbAuthResponse | null) {
    if (!response) {
      localStorage.clear();
      return;
    }

    const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
    localStorage.setItem('fb-token', response.idToken);
    localStorage.setItem('fb-token-exp', expDate.toString());
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такой email не найден');
        break;
    }

    return throwError(error)
  }
}
