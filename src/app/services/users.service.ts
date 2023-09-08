import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API_URL = `${import.meta.env.NG_APP_API}/users`;
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + `?${id}`);
  }

  create(body: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, body);
  }

  update(id: number, body: any): Observable<any> {
    return this.httpClient.put<any>(this.API_URL + `/${id}`, body);
  }

  delete(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(this.API_URL + `/${id}`);
  }

  public signIn(user: any){
    localStorage.setItem('ACCESS_TOKEN', user.token);
    localStorage.setItem('USERNAME', user.name);
  }

}