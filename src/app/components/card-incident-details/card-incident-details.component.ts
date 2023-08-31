import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { mockMapConfiguration } from '../maps/maps.mock';

@Component({
  selector: 'card-incident-details',
  templateUrl: './card-incident-details.component.html',
  styleUrls: ['./card-incident-details.component.scss'],
})
export class CardIncidentDetailsComponent implements AfterViewInit {
  @Input() incident: any;
  @Input() visible = false;
  @Output() closeEvent = new EventEmitter<null>();

  ngAfterViewInit(): void {
    const {
      style,
      zoom
    } = mockMapConfiguration;
  
    mapboxgl.accessToken = import.meta.env.NG_APP_KEY_MAP;
    const position: LngLatLike = [Number(this.incident.longitude), Number(this.incident.latitude)];
    const map = new mapboxgl.Map({
      container: 'searchMapDetails',
      style,
      center: position,
      zoom: zoom,
    });
    new mapboxgl.Marker().setLngLat(position).addTo(map);
  }

  getSeverity(status: any) {
    return 'danger';
  }
}
