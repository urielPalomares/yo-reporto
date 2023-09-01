import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MetricsService } from '../../services/metrics.service';
import { IncidentsService } from '../../services/incidents.service';
import { forkJoin, map } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  providers: [MessageService]
})
export class DashboardComponent {

  newIncident = false;
  showStatistics = false;
  showDetails = false;
  metrics: any;
  incidents: any;
  selectedIncident: any;
  incidentPoints: any;

  constructor(
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
          this.incidentPoints = this.incidents;
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
