import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  private readonly API_URL = `${environment.api_url}/incidents`;
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL);
  }

  gettById(id: number): Observable<any> {
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


}