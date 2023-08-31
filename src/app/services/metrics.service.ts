import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  private readonly API_URL = `${import.meta.env.NG_APP_API}/metrics`;
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  get(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL);
  }
}