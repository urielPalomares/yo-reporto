import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetricsService } from 'src/app/services/metrics.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newIncident = false;
  showTotals = false;
  totals: any;

  get incidents() {
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
    private metricsService: MetricsService
  ) {
    this.getTotals();
  }

  async getTotals() {
    await this.metricsService.get().subscribe(response => {
      this.showTotals = true;
     console.log('response', response)
     this.totals = response;
    }, (err: any) => {
      throw new Error(err.error);
    })
  }
}
