import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { catchError, forkJoin, Observable, throwError } from 'rxjs';
import { IncidentsService } from '../../services/incidents.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
  constructor(private incidentsService: IncidentsService, private router: Router) {}

  handleError(error: any) {
    this.router.navigateByUrl('/login');
    return throwError(error);
  }

  resolve(): Observable<any> | undefined {
    return forkJoin([
      this.incidentsService.getAll(),
    ]).pipe(
      catchError(err => this.handleError(err))
    )
  }
}
