import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IncidentsService } from 'src/app/services/incidents.service';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from '../maps/maps.mock';
import { environment } from 'src/environments/environment';
declare var mapboxSdk: any;
@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.component.html',
  providers: [MessageService]
})
export class FormIncidentComponent {
  visible = true;
  incident: any = {
    title: "Bache enorme",
    description: "Se abrio un nuevo bache en la calle Juarez",
    place: "",
    latitude: 19.3909829,
    longitude: -99.308764
  }

  constructor(
    private readonly incidentsService: IncidentsService,
    private messageService: MessageService
  ) {}


  async create() {
    this.incidentsService.create({
      ...this.incident,
      userId: 1,
      incidentStatusId: 1,
      incidentCategoryId: 3
    }).subscribe(response => {
      this.visible = false;
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se reporto correctamente la incidencia' });
    }, (err: any) => {
      throw new Error(err.error);
    })
  }

  searchOnMap() {
    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
    .forwardGeocode({
    query: this.incident.place,
    autocomplete: false,
    limit: 1
    })
    .send()
    .then((response: any) => {
      if (
        !response ||
        !response.body ||
        !response.body.features ||
        !response.body.features.length
      ) {
        console.error('Invalid response:');
        console.error(response);
      return;
    }
    const place = response.body.features[0];
    
    this.incident.longitude = place.center[0];
    this.incident.latitude = place.center[1];
    const {
      style,
      zoom
    } = mockMapConfiguration;
  
    mapboxgl.accessToken = environment.mapbox_api_token;
    const map = new mapboxgl.Map({
      container: 'searchMap',
      style,
      center: place.center,
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat(place.center).addTo(map);
  });
    
  }
}
