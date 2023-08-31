import { Component, EventEmitter, Input, Output } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from '../maps/maps.mock';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'card-incident-details',
  templateUrl: './card-incident-details.component.html',
  styleUrls: ['./card-incident-details.component.scss'],
})
export class CardIncidentDetailsComponent {
  @Input() incident: any;
  @Input() visible = false;
  @Output() closeEvent = new EventEmitter<null>();

  ngOnInit() {
    const {
      style,
      zoom
    } = mockMapConfiguration;
  
    mapboxgl.accessToken = environment.mapbox_api_token;
    const position = [parseFloat(this.incident.longitude), parseFloat(this.incident.latitude)]
    const map = new mapboxgl.Map({
      container: 'searchMapDetails',
      style,
      center: position as any,
      zoom: zoom,
    });
    new mapboxgl.Marker().setLngLat((position as any).center).addTo(map);
  }

  getSeverity(status: any) {
    return 'danger';
}
}
