import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentsService } from '../../services/incidents.service';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent  {
    newIncident = false;

    get incidents() {
      return this.activatedRoute.snapshot.data['incidents'][0].map((inc: any) => {
        return [inc.longitude, inc.latitude];
       });
    }

  constructor(private activatedRoute: ActivatedRoute) {}
}
