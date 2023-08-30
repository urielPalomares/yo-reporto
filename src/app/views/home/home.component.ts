import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetricsService } from 'src/app/services/metrics.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { forkJoin, map } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newIncident = false;
  showStatistics = false;
  metrics: any;
  incidents: any;

  get incidentPoints() {
    return this.activatedRoute.snapshot.data['incidents'][0].map((inc: any) => {
      return {
        lng: inc.longitude,
        lat: inc.latitude,
        title: inc.title,
        description: inc.description,
      };
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private metricsService: MetricsService,
    private incidentsService: IncidentsService
  ) {
    this.getMetrics();
  }

  async getMetrics() {
    await forkJoin([this.metricsService.get(), this.incidentsService.getAll()])
      .pipe(
        map(([metrics, incidents]) => {
          this.metrics = metrics;
          this.incidents = incidents;
          this.showStatistics = true;
        })
      )
      .subscribe();
  }
}
