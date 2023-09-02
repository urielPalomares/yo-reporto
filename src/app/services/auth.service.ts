import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = `${import.meta.env.NG_APP_API}/auth`;
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(body: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, body);
  }

  public signIn(userData: any){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}