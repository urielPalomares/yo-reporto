import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from './maps.mock';
import { environment } from '../../../environments/environment.prod';
@Component({
  selector: 'maps-app',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
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

    marks.forEach((mark) => {
      new mapboxgl.Marker({ color: mark.color })
      .setLngLat(mark.lngLat)
      .addTo(map);
    });
  }
}
