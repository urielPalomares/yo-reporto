import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MetricsService } from '../../services/metrics.service';
import { IncidentsService } from '../../services/incidents.service';
import { forkJoin, map } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  providers: [MessageService]
})
export class HomeComponent {

  newIncident = false;
  showStatistics = false;
  showDetails = false;
  metrics: any;
  incidents: any;
  selectedIncident: any;

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

  details(incident: any) {
    this.showDetails = true;
    this.selectedIncident = incident;
  }
}
