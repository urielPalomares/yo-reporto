import { Component, OnInit, Input } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { mockMapConfiguration } from './maps.mock';
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

    mapboxgl.accessToken = import.meta.env.NG_APP_KEY_MAP;
    const map = new mapboxgl.Map({
      container,
      style,
      center: centerCoordinates,
      zoom: zoom,
    });

    
    this.incidents.forEach((mark: any) => {
      const position = [parseFloat(mark.lng), parseFloat(mark.lat)]
      const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<strong>${mark.title}</strong><p>${mark.description}</p>`
      );

      new mapboxgl.Marker({ color: 'red' })
      .setLngLat(position as any)
      .addTo(map)
      .setPopup(popup);
    });
  }
}
