import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  private readonly API_URL = `${environment.api_url}/metrics`;
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  get(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL);
  }
}