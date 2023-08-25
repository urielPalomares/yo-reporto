import { Component, OnInit, Input } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from './maps.mock';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'maps-app',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() incidents = [];

  ngOnInit(): void {

    const { 
      centerCoordinates, 
      container,
      marks,
      style,
      zoom
    } = mockMapConfiguration;

    mapboxgl.accessToken = environment.mapbox_api_token;
    const map = new mapboxgl.Map({
      container,
      style,
      center: centerCoordinates,
      zoom: zoom,
    });

    this.incidents.forEach((mark) => {
      new mapboxgl.Marker({ color: 'red' })
      .setLngLat(mark)
      .addTo(map);
    });
  }
}
