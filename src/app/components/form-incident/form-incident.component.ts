import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IncidentsService } from 'src/app/services/incidents.service';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from '../maps/maps.mock';
declare var mapboxSdk: any;
@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.component.html',
  providers: [MessageService]
})
export class FormIncidentComponent {

  @Output() closeEvent = new EventEmitter<null>();
  @Input() visible = false;
  incident: any = {
    title: null,
    description: null,
    place: "",
    latitude: 19.3909829,
    longitude: -99.308764
  }
  places = [];
  placesOptions: any;

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
      this.closeEvent.emit();
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se reporto correctamente la incidencia' });
    }, (err: any) => {
      throw new Error(err.error);
    })
  }

  searchOnMap(event: any) {
    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
    .forwardGeocode({
    query: event.query,
    autocomplete: false,
    limit: 5
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
    this.places = response.body.features;
    this.placesOptions = this.places.map((p: any) => {
      return p.place_name;
     });
  });
    
  }

  onSelect(event: any){

    let place = this.places.filter((x: any) => x.place_name === event);

    if (!place) {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Elegir nuevamente el lugar' });
    }

     place = place[0];
    
    this.incident.longitude = (place as any).center[0];
    this.incident.latitude = (place as any).center[1];
    const {
      style,
      zoom
    } = mockMapConfiguration;
  
    mapboxgl.accessToken = import.meta.env.NG_APP_KEY_MAP;
    const map = new mapboxgl.Map({
      container: 'searchMap',
      style,
      center: (place as any).center,
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat((place as any).center).addTo(map);
  }
}
